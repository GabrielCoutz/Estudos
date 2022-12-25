const options = {
  el: "#app",
  data: {
    buttonStyle: {
      width: "",
      height: "",
      fontSize: "",
      fontFamily: "",
      textAlign: "",
      background: "#rrggbb",
      color: "#rrggbb",
      borderRadius: "",
    },
    user: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  },
  methods: {
    showUserData() {
      const path = document.querySelector("#userResult");
      for (key in this.user) {
        path.innerText += `${key}: ${this.user[key]}\n`;
      }
    },
  },
  computed: {
    insertButtonStyles() {
      return {
        ...this.buttonStyle,
        width: this.buttonStyle.width + "px",
        height: this.buttonStyle.height + "px",
        fontSize: this.buttonStyle.fontSize + "px",
        borderRadius: this.buttonStyle.borderRadius + "px",
      };
    },
  },
  watch: {},
};

const vm = new Vue(options);
