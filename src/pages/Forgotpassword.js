import React from "react";
import CustomInput from "../components/CostumInput";

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Recuperar Contraseña</h3>
        <p className="text-center"> Inserta tu email para recuperar la contraseña.</p>
        <form action="#">
          <CustomInput type="password" Label="Email Address" id="email" />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Recuperar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
