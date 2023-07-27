class DrawingBoard{
    MODE = "NONE" // BRUSH ERASER

    IsMouseDown = false; // true

    settingColor = "#FFFFFF";

    IsNavigatorVisible = false;

    undoArray = [];

    constructor() {
        this.assignElememt();
        this.addEvent();
        this.initContext();
        this.initCanvasBackgroundColor();
    }

    assignElememt() {
        this.containerEl = document.querySelector('#container');
        this.canvasEl = this.containerEl.querySelector('#canvas');
        this.toolbarEl = this.containerEl.querySelector('#toolbar');
        this. brushEl = this.toolbarEl.querySelector('#brush');
        this.colorPickerEl = this.toolbarEl.querySelector('#colorPicker');
        this.brushPanelEl = this.containerEl.querySelector('#brushPanel');
        this.brushSliderEl = this.brushPanelEl.querySelector('#brushSize');
        this.brushSizePreviewEl = this.brushPanelEl.querySelector('#brushSizePreview');
        this.eraserEl = this.toolbarEl.querySelector('#eraser');
        this.navigatorEl =  this.containerEl.querySelector('#navigator');
        this.navigatorImagePanelEl = this.containerEl.querySelector('#imgNav');
        this.navigatorImageEl = this.navigatorImagePanelEl.querySelector('#canvasImg');
        this.undoEl = this.toolbarEl.querySelector('#undo');
    }

    addEvent() {
        this.brushEl.addEventListener('click', this.onClickBrush.bind(this));
        this.canvasEl.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvasEl.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.canvasEl.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.brushSliderEl.addEventListener('input', this.onChangeBrushSize.bind(this));
        this.colorPickerEl.addEventListener('input', this.onChangeColor.bind(this));
        this.canvasEl.addEventListener('mouseout', this.onMouseOut.bind(this));
        this.eraserEl.addEventListener('click', this.onClickEraser.bind(this));
        this.navigatorEl.addEventListener('click', this.onClickNavigator.bind(this));
        this.undoEl.addEventListener('click', this.onClickUndo.bind(this));
    }

    onMouseOut() {
        if (this.MODE === "NONE") return;
        this.IsMouseDown = false;
        this.updateNabigator();
    }

    onChangeColor() {
        this.brushSizePreviewEl.style.background = this.colorPickerEl.value;
    }

    onChangeBrushSize() {
        this.brushSizePreviewEl.style.width = `${this.brushSliderEl.value}px`;
        this.brushSizePreviewEl.style.height = `${this.brushSliderEl.value}px`;
    }

    onMouseUp() {
        if (this.MODE === "NONE") return;
        this.IsMouseDown = false;
        this.updateNabigator();
    }

    onMouseDown(event) {
        if(this.MODE === "NONE") return;
        this.IsMouseDown = true;
        const currentPosition = this.getMousePosition(event);
        this.context.beginPath();
        this.context.moveTo(currentPosition.x, currentPosition.y);
        this.context.lineCap = "round";
        if(this.MODE == "BRUSH") {
        this.context.strokeStyle = this.colorPickerEl.value;
        this.context.lineWidth = this.brushSliderEl.value;
        }
        else if(this.MODE === "ERASER") {
            this.context.strokeStyle = this.settingColor;
            this.context.lineWidth = this.brushSliderEl.value;
        }
        this.saveState();
        // this.context.lineTo(400, 400);
        // this.context.stroke();
    }

    getMousePosition(event) {
        const boundaries = this.canvasEl.getBoundingClientRect();
        return{
            x: event.clientX - boundaries.left,
            y: event.clientY - boundaries.top,
        }
    }

    onMouseMove(event) {
        if(!this.IsMouseDown) return;
        const currentPosition = this.getMousePosition(event);
        this.context.lineTo(currentPosition.x, currentPosition.y);
        this.context.stroke();
    }

    onClickBrush(event) {
        const IsActive = event.currentTarget.classList.contains('active');
        this.MODE = IsActive ? "NONE" :"BRUSH";
        this.canvasEl.style.cursor = IsActive ?"default" : "crosshair";
        this.brushEl.classList.toggle('active');
        // this.brushPanelEl.classList.toggle("hide");
        if(!IsActive) {
            this.brushPanelEl.classList.remove("hide");
        }else {
            this.brushPanelEl.classList.add("hide");
        }
        this.eraserEl.classList.remove("active");
        // this.navigatorEl.classList.remove("active");
    }

    onClickEraser(event) {
        const IsActive = event.currentTarget.classList.contains('active');
        this.MODE = IsActive ? "NONE" :"ERASER";
        this.canvasEl.style.cursor = IsActive ?"default" : "crosshair";
        this.eraserEl.classList.toggle('active');
        //this.brushPanelEl.classList.add("hide");
        if(!IsActive) {
            this.brushPanelEl.classList.remove("hide");
        }else {
            this.brushPanelEl.classList.add("hide");
        }
        this.brushEl.classList.remove("active");
        // this.navigatorEl.classList.remove("active");
    }

    onClickNavigator(event) {
        this.IsNavigatorVisible = !event.currentTarget.classList.contains('active');
        this.navigatorEl.classList.toggle("active");
        this.navigatorImagePanelEl.classList.toggle("hide");
        this.updateNabigator();
    }

    updateNabigator() {
        if(!this.IsNavigatorVisible) return;
        this.navigatorImageEl.src = this.canvasEl.toDataURL();
    }

    saveState() {
        this.undoArray.push(this.canvasEl.toDataURL());
        console.log(this.undoArray)
    }

    onClickUndo() {
        if(this.undoArray.length === 0) return;
        let previousURL = this.undoArray.pop(); 
        // 이미지 편집 기능을 위해 사용되는 이전 이미지 URL들을 담고 있는 배열 / pop()은 배열에서 마지막 요소를 제거하고 해당 요소를 반환
        let previousImage = new Image(); 
        // 새로운 Image 객체를 생성하여 previousImage 변수에 할당
        previousImage.onload = () => { 
            // previousImage 객체의 onload 이벤트 핸들러를 정의
            this.context.clearRect(0,0, this.canvasEl.width, this.canvasEl.height); 
            // 이전 이미지를 그리기 전에 캔버스의 영역을 지움 / clearRect는 지정한 사각형 영역을 지우는 메소드
            this.context.drawImage(previousImage, 0,0, this.canvasEl.width, this.canvasEl.height, 0,0, this.canvasEl.width, this.canvasEl.height);
            //previousImage를 캔버스에 그림
            // drawImage() 함수는 이미지를 그리는 메소드로, 여기서는 previousImage를 캔버스의 (0, 0) 위치부터 캔버스의 가로와 세로 크기(this.canvasEl.width, this.canvasEl.height)로 그림
        }
        previousImage.src = previousURL;
        // previousURL에서 가져온 이전 이미지의 URL을 previousImage 객체의 src 속성에 설정
        // 이로 인해 이전 이미지가 로드되고 onload 이벤트가 발생하면 앞서 정의한 이벤트 핸들러가 실행
    }

    initContext() {
        this.context = this.canvasEl.getContext("2d");
    }

    initCanvasBackgroundColor() {
        this.context.fillStyle = this.settingColor;
        this.context.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    }
}

new DrawingBoard();
