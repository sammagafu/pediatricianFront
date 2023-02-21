import { authStore } from "@/stores/usersStore"


export class AuthService {
  static isAuthenticated() {
    return AuthService.getToken() != null;
  }

  static saveToken(token) {
    const userstore = authStore()
    userstore.authToken  = token;
    localStorage.setItem("access", token.access)
    localStorage.setItem("refresh", token.refresh)
    if(token.remember){
      localStorage.setItem("access", JSON.stringify(access));
    }else{
      sessionStorage.setItem("access", JSON.stringify(access));
    }
  }

  static saveCurrentUserData(data) {
    // localStorage.setItem("current-user", JSON.stringify(data));
    // userstore.setUser(data)
  }

  static getCurrentUserData() {
    return JSON.parse(localStorage.getItem("current-user"));
  }

  static getToken(tokenType = "refresh") {
    try {
        // Read from sessionStorage & local
        const storedToken = localStorage.getItem(tokenType) ? localStorage.getItem(tokenType) : sessionStorage.getItem(tokenType);
      return storedToken;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

export const authService = new AuthService()