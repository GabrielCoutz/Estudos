import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
    showUserName() {
      return this.user;
    },
  },
};
