function resolvedPromise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({'message': 'delayed success!'});
      }, 500);
    });
  }

function rejectedPromise() {
    return new Promise(reject => {
      setTimeout(() => {
        reject({'error': 'delayed exception'});
      }, 500);
    });
  }

  async function asyncCall1() {
    const result = await resolvedPromise();
    console.log(result);
  }
  async function asyncCall2() {
    const result = await rejectedPromise();
    console.log(result);
  }
  
  asyncCall1()
  asyncCall2()
