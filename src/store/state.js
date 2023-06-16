export default {
  user: {
    data: {},
    token: sessionStorage.getItem("TOKEN"),
  },
  currentSurvey: {
    loading: false,
    data: {},
  },
  dashboard: {
    loading: false,
    data: {},
  },
  surveys: {
    loading: false,
    data: [],
    links: [],
  },
  questionTypes: ["text", "select", "textarea", "radio", "checkbox"],
  notification: {
    show: false,
    message: null,
    type: null,
  },
};
