class Property {
  constructor(type) {
    if (type) {
      this.type = type;
    }

    return this;
  }

  items(type) {
    this.items = new Property(type);

    return this;
  }
}

export const type = (type) => {
  return new Property(type);
};

export default { type };
