console.log("h PARCEL!")

async function test(){//비동기함수
  const promise = Promise.resolve(123);
  console.log(await promise);//await로 기다린다.
}
test();