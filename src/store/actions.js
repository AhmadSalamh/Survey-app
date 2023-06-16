import axiosClient from "../axios";
export default {
  async register({ commit }, user) {
    const { data } = await axiosClient.post("register", user);
    commit("setUser", data);
  },

  async login({ commit }, user) {
    const { data } = await axiosClient.post("login", user);
    commit("setUser", data);
  },

  async logout({ commit }) {
    await axiosClient.post("logout");
    commit("logout");
  },

  async getDashboardData({ commit }) {
    commit("dashboardLoading", true);
    const { data } = await axiosClient.get("/dashboard");
    commit("dashboardLoading", false);
    commit("setDashboardData", data);
  },

  async getSurvey({ commit }, id) {
    commit("setCurrentSurveyLoading", true);
    try {
      const { data } = await axiosClient.get(`/survey/${id}`);
      commit("setCurrentSurvey", data);
      commit("setCurrentSurveyLoading", false);
      return data;
    } catch (error) {
      commit("setCurrentSurveyLoading", false);
      throw error;
    }
  },

  async saveSurvey({ commit }, survey) {
    delete survey.image_url;
    if (survey.id) {
      const { data } = await axiosClient.put(`/survey/${survey.id}`, survey);
      commit("setCurrentSurvey", data);
      return data;
    } else {
      const { data } = await axiosClient.post("/survey", survey);
      commit("setCurrentSurvey", data);
      return data;
    }
  },

  async getSurveys({ commit }, { url = null } = {}) {
    url = url || "/survey";
    commit("setSurveysLoading", true);
    try {
      const { data } = await axiosClient.get(url);
      commit("setSurveys", data);
      commit("setSurveysLoading", false);
      return data;
    } catch (error) {
      commit("setSurveysLoading", true);
    }
  },

  async saveSurveyAnswer({ commit }, { surveyId, answers }) {
    return await axiosClient.post(`/survey/${surveyId}/answer`, { answers });
  },

  async getSurveyBySlug({ commit }, slug) {
    commit("setSurveysLoading", true);
    try {
      const { data } = await axiosClient.get(`/survey-by-slug/${slug}`);
      commit("setCurrentSurvey", data);
      commit("setSurveysLoading", false);
      return data;
    } catch (error) {
      commit("setSurveysLoading", true);
    }
  },

  async deleteSurvey({}, id) {
    return await axiosClient.delete(`/survey/${id}`);
  },
};
