export const Form = {
  name: "",
  surname: "",
  address: "",

  save() {
    const memento = {
      name: this.name,
      surname: this.surname,
      address: this.address,
    };

    this.name = "";
    this.surname = "";
    this.address = "";

    return memento;
  },

  restore({ name, surname, address }) {
    this.name = name;
    this.surname = surname;
    this.address = address;
  },
};

const memento = Form.save();

Form.restore(memento);
