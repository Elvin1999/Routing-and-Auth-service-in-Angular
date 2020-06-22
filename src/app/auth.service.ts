export class AuthService {
  loggedIn = false;
  redirectUrl: string;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 700);
    });
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
}
