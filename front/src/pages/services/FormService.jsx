import React from 'react'
import { Button, Select , Label, TextInput } from 'flowbite-react';

function FormService() {
  return (
    <form className="max-w-sm mx-auto">
  <div>
    <div className="mb-2 block">
      <Label htmlFor="email2" value="Your email"  />
    </div>
    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="city" value="Tu ciudad" />
    </div>
    <TextInput id="city" type="city" required shadow />
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="address" value="Tu direccion" />
    </div>
    <TextInput id="address" type="address" required shadow />
  </div>
  <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="services" value="Selecciona tu servicio" />
      </div>
      <Select id="services" required>
        <option>Gacista</option>
        <option>Plomero</option>
        <option>Albañil</option>
        <option>Mecanico</option>
      </Select>
    </div>

  <Button type="submit">Register new account</Button>
</form>
  );
}

export default FormService
