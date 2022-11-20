const DOSE = 5;
const model = {
  comments: [],
  lastNumberShowedComment: 0,
  currentNumberShowedComment: 0,
  totalNumberComments: 0,
  doseShowedComments: [],
};

const setStartModel = (comments) => {
  model.lastNumberShowedComment = 0;
  model.comments = [...comments];
  model.totalNumberComments = comments.length;
  model.currentNumberShowedComment =
    model.totalNumberComments >= DOSE ? DOSE : model.totalNumberComments;
};

const getModel = () => model;

const getCurrentNumber = () => model.currentNumberShowedComment;

const getTotalNumber = () => model.totalNumberComments;

const getDoseShowedComments = () =>
  model.comments.slice(
    model.lastNumberShowedComment,
    model.currentNumberShowedComment
  );

const setNextDose = () => {
  if (model.currentNumberShowedComment + DOSE < model.totalNumberComments) {
    model.lastNumberShowedComment = model.currentNumberShowedComment;
    model.currentNumberShowedComment += DOSE;
  } else {
    model.lastNumberShowedComment = model.currentNumberShowedComment;
    model.currentNumberShowedComment = model.totalNumberComments;
  }
};

const commentsModel = {
  setStartModel,
  getModel,
  getCurrentNumber,
  getTotalNumber,
  getDoseShowedComments,
  setNextDose,
};
export { commentsModel };
