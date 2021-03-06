import axios from "axios";
import {
  ADD_QUESTIONS,
  CLEAR_RESPONSE,
  GET_DIFFICULTY,
  ADD_TESTS,
  SET_CURRENT_ITEM,
  ADD_ANSWERS,
  CURRENT_TEST,
  LOADING_UI,
  TEST_STATE,
  UNLOADING_UI,
  CURRENT_ANSWERS,
  QUESTION_STATE,
} from "./constants";
import { REACT_APP_BASE_URL } from "react-native-dotenv";

// to load all the tests into redux
export const addTests = (tests) => ({
  type: ADD_TESTS,
  tests,
});

// // this stores all the questions of the current test
// export const currentTest = (questions) => ({
//   type: CURRENT_TEST,
//   questions,
// });

// // I dont think If I use this anymore but I'm gonna let it stay here.
// export const currentAnswers = (answers) => ({
//   type: CURRENT_ANSWERS,
//   answers,
// });

// export const addQuetions = (questions) => ({
//   type: ADD_QUESTIONS,
//   questions,
// });

// export const questionState = (current) => ({
//   type: QUESTION_STATE,
//   current,
// });

// export const testState = (assesmentType) => ({
//   type: TEST_STATE,
//   assesmentType,
// });

// export const getDifficulty = (difficulty) => ({
//   type: GET_DIFFICULTY,
//   difficulty,
// });

// export const setCurrentItem = (item) => ({
//   type: SET_CURRENT_ITEM,
//   item,
// });

// export const clearResponse = () => ({
//   type: CLEAR_RESPONSE,
// });

// // to add the answers
// export const addAnswers = (
//   answerNumber,
//   answer,
//   currentQuestion,
//   currentSubquestion
// ) => {
//   return {
//     type: ADD_ANSWERS,
//     answerNumber,
//     answer,
//     currentQuestion,
//     currentSubquestion,
//   };
// };

// export const API_URI = "http://edoflip.myways.in/api";
// export const API_URI = "http://localhost:2000/api";

// api call to get all the tests from the backend. used in the dashboard
export const startAddTests = () => {
  return (dispatch) => {
    return axios
      .get(`http://5307bd43.ngrok.io/api/tests`)
      .then((res) => {
        dispatch(addTests(res.data.questions));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// api call to get the questions for the selected test
// export const getCurrentTest = () => {
//   return (dispatch) => {
//     return axios
//       .get(`http://ee06364f.ngrok.io/api/test/workOrientation`)
//       .then((res) => {
//         dispatch(currentTest(res.data.questions.questions));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// // export const getCurrentTest = (testName = "interestTest") => {
// //     return (dispatch, getState) => {
// //         dispatch({ type: LOADING_UI });
// //         return axios.get(`${API_URI}/user/setTestCompleted/${testName.toLowerCase()}`).then(res => {
// //             dispatch(currentTest(res.data));
// //             dispatch({ type: UNLOADING_UI });
// //             console.log(res.data)
// //         }).catch(err => {
// //             console.log(err)
// //         })
// //     }
// // }

// // this sends the answers to the backend
// export const sendAnswers = (testName, answers) => {
//   return (dispatch, getState) => {
//     dispatch({ type: LOADING_UI });
//     return axios
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/api/test/${testName.toLowerCase()}`,
//         {
//           response: answers,
//           user_id: window.localStorage.getItem("user_id"),
//         }
//       )
//       .then((res) => {
//         dispatch(currentTest(res.data)); //loads up new questions if anny
//         dispatch({ type: UNLOADING_UI });
//         return res.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// // this is for personality test as in it we have to send the ans twice so this is for sending the ans the second time
// export const sendAnswers2 = (testName, answers) => {
//   return (dispatch, getState) => {
//     dispatch({ type: LOADING_UI });
//     return axios
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/api/test/${testName.toLowerCase()}2`,
//         {
//           response: answers,
//           user_id: window.localStorage.getItem("user_id"),
//         }
//       )
//       .then((res) => {
//         dispatch(currentTest(res.data));
//         dispatch({ type: UNLOADING_UI });
//         return res.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const sendAnswers2 = (testName,answers) => {
//     return (dispatch, getState) => {
//         dispatch({ type: LOADING_UI });
//         return axios.post(`${API_URI}/test/${testName.toLowerCase()}2`, {response:answers}).then(res => {
//             dispatch(currentTest(res.data));
//             dispatch({ type: UNLOADING_UI });
//             return res.data;
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }
