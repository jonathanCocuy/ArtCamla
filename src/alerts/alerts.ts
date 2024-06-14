import Swal from "sweetalert2";

export const successAlert = () => {
  Swal.fire({
    title: "Bienvenido",
    text: "Haz iniciado sesion",
    icon: "success",
  });
};

export const errorAlert = () => {
  Swal.fire({
    title: "Error!",
    text: "Los campos estan vacios",
    icon: "error",
  });
};

export const errorLoginAlert = () => {
  Swal.fire({
    title: "Error!",
    text: "Usuario o contraseña incorrectos",
    icon: "error",
  });
};
