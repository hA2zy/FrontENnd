# TypeScriot
---

## 기본 타입

기본 타입들은 JS에 있는 타입들을 가져온다.

## number && string && boolean && array

number이나 string, boolean이 있다.

하지만 배열은 다르게 설정을 한다.

```jsx
// 일반적으로 number이나 string, boolean은 밑에 쓴다.

let age:number = 17;
let isAdult:boolean = false;

// 배열을 쓰는 방법은 두 가지가 있다.

let a:number[] = [1, 2, 3];
let a2:Array<number> = [4, 5, 6];
```

## tuple

튜플은 배열에서 첫 번째는 number 두 번째는 string을 넣는 것을 해준다.

```jsx
let a:[number, string];

a = [1, "Hello"];

a = ["Hello", 1]; // 단, 1이랑 "Hello"를 바꿔서 쓰는 것은 안된다.
```

## void && never

void는 함수에서 아무것도 반환하지 않을 때, 사용을 한다.

```jsx
const func = ():void => {
  console.log('void type');
}

function func():void = {
	console.log('void type');
}

// 이런 식으로 두 가지 방식으로 쓸 수가 있다.

```

never은 함수가 error을 반환할 때나 혹은 영원히 끝나지 않은 함수의 타입을 나타낼 수도 있다.

```jsx
// Error을 반환하는 함수
const showError = ():never => {
  throw new Error();
}

// 영원히 끝나지 않는 함수
const ifLoof = ():never => {
  while(true) {
    console.log('Dont Stop');
    
  }
}
```

## enum

- 비슷한 값들끼리 묶어주었다고 생각을 하면 된다.

```jsx
enum Os {
  Window, // 0
  ios,    // 1
  Android // 2
}
```

enum은 수동으로 값을 할당하지 않으면 0부터 1씩 증가한 값을 준다.

저기서 window = 3을 하면 3부터 시작을 해서 ios는 4, Android는 5의 값을 가진다.

만약 ios의 값이 10이면 window의 값은 아까 3 그대로 Android는 11이다.

console.log([’ios’]);를 하면 위의 코드 기준으로 1이 나오고 [1]을 넣으면 ios가 나온다.

또한 값은 숫자가 아닌 문자열로 넣어도 된다.

```jsx
enum Os {
  Window, // 0
  ios,    // 1
  Android // 2
}

let myOs:Os; // 이렇게 지정을 하면 myOs의 타입은 Os가 된다. 

//그러므로 Os 안에 있는 값만 입력이 가능하다.

myOs = Os.window
```

## null && undefined

```jsx
let a:null = null;
let b:undefined = undefined;
```

이런 식으로 쓰면 된다.