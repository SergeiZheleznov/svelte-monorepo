interface ISampleService {
  doSomething: () => void;
}

export class SampleService implements ISampleService {
  doSomething(): void {
    console.log('doSomething');
  }
}