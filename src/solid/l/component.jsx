function Button() {
  return <button></button>;
}

function Input() {
  return <input type="text" />;
}

function Field() {
  return (
    <div>
      <Input />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div>
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
    </div>
  );
}
