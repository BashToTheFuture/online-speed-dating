import temp from '../Templates/myProfileTemplate.vue';
import { mapState } from 'vuex';
import moment from 'moment';
import auth from '../Auth/auth.js';


var myProfile = {
  name: 'myProfile',
  template: temp.template,
  data: function() {
    return {
      msg: `Welcome To Bash To The Dating! ${this.$store.state.user.username}`,
      background: '../Images/dating-bg.jpg',
      savedEvents: '',
      profileImg: 'http://www.returnofkings.com/wp-content/uploads/2014/04/online-dating-header2.jpg',
      match: true,
      user: this.$store.state.user,
      admin: this.$store.state.user.admin,
      moment: moment
    };
  },

  computed: {
    savedEvents () {
      return this.$store.state.savedEvents;
    }
  },

  methods: {
    goToEvents() {
      this.$router.push('/events/' + this.username);
    },
    toDate (event) {
      this.$router.push('/date/' + event._id + '/active');
    },
    editProfile () {
      this.$router.push('/myprofile/' + this.username + '/edit');
    },
    goToAdmin () {
      this.$router.push('/admin');
    }
  }
};

export default myProfile;
