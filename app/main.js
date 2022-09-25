const submissionComponent = {
  template: `<div class="card">
				<div class="card__dets">
					<img alt="Avatar1" v-bind:src="submission.avatar">
					<p>{{ submission.name }}</p>
				</div>
				<div class="card__post">
					{{ submission.post }}
				</div>
				<div class="card__likes">
					<span v-on:click="upvote(submission.id)">
						<i class="fa-regular fa-thumbs-up"></i>
						<strong class="card__likes-num">
							{{ submission.votes }}
						</strong>
					</span>
				</div>
			</div>`,
  props: ["submission", "submissions"],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    },
  },
};

// MAIN APP
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  components: {
    "submission-component": submissionComponent,
  },
};
Vue.createApp(upvoteApp).mount('#app')