class BodyParts {
  constructor() {
    this.array_img = [
      "../assets/images/1.png",
      "../assets/images/2.png",
      "../assets/images/3.png",
      "../assets/images/4.png",
      "../assets/images/5.png",
      "../assets/images/6.png",
      "../assets/images/7.png",
    ];
  }

  nextImage(num) {
    return this.array_img[num];
  }
}
export { BodyParts };

// export { body };
