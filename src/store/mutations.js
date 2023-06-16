export default {
  logout(state) {
    state.user.data = {};
    state.user.token = null;
    sessionStorage.removeItem("TOKEN");
  },
  setUser(state, user) {
    state.user.token = user.token;
    state.user.data = user.user;
    sessionStorage.setItem("TOKEN", user.token);
  },

  setCurrentSurveyLoading(state, loading) {
    state.currentSurvey.loading = loading;
  },
  setCurrentSurvey(state, survey) {
    state.currentSurvey.data = survey.data;
  },
  setSurveysLoading(state, loading) {
    state.surveys.loading = loading;
  },
  setSurveys(state, surveys) {
    state.surveys.links = surveys.meta.links;
    state.surveys.data = surveys.data;
  },
  dashboardLoading(state, loading) {
    state.dashboard.loading = loading;
  },
  setDashboardData(state, data) {
    state.dashboard.data = data;
  },
  notify(state, { message, type }) {
    state.notification.show = true;
    state.notification.type = type;
    state.notification.message = message;

    setTimeout(() => {
      state.notification.show = false;
    }, 3000);
  },
};
