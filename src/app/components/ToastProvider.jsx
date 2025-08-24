"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = ({ children }) => {
  return <Toaster>{children}</Toaster>;
};

export default ToastProvider;
