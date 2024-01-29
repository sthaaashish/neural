"use client";
export const setUser = (user: any) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const setCart = (carts: any) => {
  localStorage.setItem("carts", JSON.stringify(carts)); 
};

export const clearCart = () => {
  localStorage.removeItem("carts"); 
};

export const getCart = () => {
  const carts = localStorage.getItem("carts"); 
  return carts === null ? [] : JSON.parse(carts);
};

export const getUser = () => {
  if (typeof localStorage !== "undefined") {
    const user = localStorage.getItem("user");
    return user === null ? null : JSON.parse(user);
  }
};

export const clearLocal = () => {
  localStorage.clear();
};
