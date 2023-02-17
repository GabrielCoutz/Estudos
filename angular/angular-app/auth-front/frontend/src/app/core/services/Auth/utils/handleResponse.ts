export function saveTokenInLocalStorage(token: string): void {
  localStorage.setItem('token', token);
}

export function removeTokenFromLocalStorage(): void {
  localStorage.removeItem('token');
}
