import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../url_helper";
import accessToken from "../jwt-token-access/accessToken";
import {
  calenderDefaultCategories,
  cartData,
  chats,
  comments,
  contacts,
  cryptoOrders,
  customerData,
  events,
  groups,
  invoiceList,
  messages,
  orders,
  productsData,
  projects,
  inboxmails,
  starredmails,
  importantmails,
  draftmails,
  sentmails,
  trashmails,
  recentProducts,
  shops,
  tasks,
  userProfile,
  users as members,
  wallet,
  yearData,
  monthData,
  weekData,
  janTopSellingData,
  decTopSellingData,
  novTopSellingData,
  octTopSellingData,
  janEarningData,
  decEarningData,
  novEarningData,
  octEarningData,
  productComments,
} from "../../common/data";

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "admin@themesbrand.com",
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

  mock.onPost(url.POST_FAKE_REGISTER).reply(config => {
    const user = JSON.parse(config["data"]);
    users.push(user);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-fake-login").reply(config => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          resolve([200, validUser[0]]);
        } else {
          reject([
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/fake-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPost("/post-jwt-register").reply(config => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply(config => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-profile").reply(config => {
    const user = JSON.parse(config["data"]);

    const one = config.headers;

    let finalToken = one.Authorization;

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            localStorage.removeItem("authUser");
            localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

            resolve([200, "Profile Updated Successfully"]);
          } else {
            reject([400, "Something wrong for edit profile"]);
          }
        } else {
          reject([400, "Invalid Token !!"]);
        }
      });
    });
  });

  mock.onPost("/post-fake-profile").reply(config => {
    const user = JSON.parse(config["data"]);
    // console.log("validUser",user)

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          let objIndex;

          //Find index of specific object using findIndex method.
          objIndex = users.findIndex(obj => obj.uid === user.idx);

          //Update object's name property.
          users[objIndex].username = user.username;

          // Assign a value to locastorage
          localStorage.removeItem("authUser");
          localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

          resolve([200, "Profile Updated Successfully"]);
        } else {
          reject([400, "Something wrong for edit profile"]);
        }
      });
    });
  });

  mock.onPost("/jwt-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPost("/social-login").reply(config => {
    const user = JSON.parse(config["data"]);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...user[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onGet(url.GET_PRODUCTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productsData) {
          // Passing fake JSON data as response
          resolve([200, productsData]);
        } else {
          reject([400, "Cannot get products"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_PRODUCTS_DETAIL}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productsData) {
          // Passing fake JSON data as response
          const { params } = config;
          const product = productsData.find(
            product => product.id.toString() === params.id.toString()
          );
          resolve([200, { ...product, recentProducts, comments }]);
        } else {
          reject([400, "Cannot get product detail"]);
        }
      });
    });
  });

  mock.onGet(url.GET_EVENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (events) {
          // Passing fake JSON data as response
          resolve([200, events]);
        } else {
          reject([400, "Cannot get events"]);
        }
      });
    });
  });

  mock.onGet(url.GET_INBOX_MAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (inboxmails) {
          // Passing fake JSON data as response
          resolve([200, inboxmails]);
        } else {
          reject([400, "Cannot get inboxmails"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_INBOX_MAIL).reply(inboxmail => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (inboxmail && inboxmail.data) {
          // Passing fake JSON data as response
          resolve([200, inboxmail.data]);
        } else {
          reject([400, "Cannot add project"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_INBOX_MAIL).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.inboxmail]);
        } else {
          reject([400, "Cannot delete inboxmail"]);
        }
      });
    });
  });

  mock.onGet(url.GET_STARRED_MAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (starredmails) {
          // Passing fake JSON data as response
          resolve([200, starredmails]);
        } else {
          reject([400, "Cannot get starredmails"]);
        }
      });
    });
  });

  mock.onGet(url.GET_IMPORTANT_MAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (importantmails) {
          // Passing fake JSON data as response
          resolve([200, importantmails]);
        } else {
          reject([400, "Cannot get importantmails"]);
        }
      });
    });
  });
  mock.onGet(url.GET_TRASH_MAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (trashmails) {
          // Passing fake JSON data as response
          resolve([200, trashmails]);
        } else {
          reject([400, "Cannot get trashmails"]);
        }
      });
    });
  });
  mock.onGet(url.GET_DRAFT_MAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (draftmails) {
          // Passing fake JSON data as response
          resolve([200, draftmails]);
        } else {
          reject([400, "Cannot get draftmails"]);
        }
      });
    });
  });
  mock.onGet(url.GET_SENT_MAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sentmails) {
          // Passing fake JSON data as response
          resolve([200, sentmails]);
        } else {
          reject([400, "Cannot get sentmails"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_USER).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data]);
        } else {
          reject([400, "Cannot add user"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_USER).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data]);
        } else {
          reject([400, "Cannot update user"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_USER).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.user]);
        } else {
          reject([400, "Cannot delete user"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_PROJECT).reply(project => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (project && project.data) {
          // Passing fake JSON data as response
          resolve([200, project.data]);
        } else {
          reject([400, "Cannot add project"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_PROJECT).reply(project => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (project && project.data) {
          // Passing fake JSON data as response
          resolve([200, project.data]);
        } else {
          reject([400, "Cannot update project"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_PROJECT).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.project]);
        } else {
          reject([400, "Cannot delete project"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_EVENT).reply(event => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_EVENT).reply(event => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_EVENT).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.event]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CATEGORIES).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (calenderDefaultCategories) {
          // Passing fake JSON data as response
          resolve([200, calenderDefaultCategories]);
        } else {
          reject([400, "Cannot get categories"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CHATS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chats) {
          // Passing fake JSON data as response
          resolve([200, chats]);
        } else {
          reject([400, "Cannot get chats"]);
        }
      });
    });
  });

  mock.onGet(url.GET_GROUPS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (groups) {
          // Passing fake JSON data as response
          resolve([200, groups]);
        } else {
          reject([400, "Cannot get groups"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CONTACTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contacts) {
          // Passing fake JSON data as response
          resolve([200, contacts]);
        } else {
          reject([400, "Cannot get contacts"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_MESSAGES}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (messages) {
          // Passing fake JSON data as response
          const { params } = config;
          const filteredMessages = messages.filter(
            msg => msg.roomId === params.roomId
          );
          resolve([200, filteredMessages]);
        } else {
          reject([400, "Cannot get messages"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_MESSAGE).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.data) {
          // Passing fake JSON data as response
          resolve([200, config.data]);
        } else {
          reject([400, "Cannot add message"]);
        }
      });
    });
  });

  mock.onGet(url.GET_ORDERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orders) {
          // Passing fake JSON data as response
          resolve([200, orders]);
        } else {
          reject([400, "Cannot get orders"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_ORDER).reply(order => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (order && order.data) {
          // Passing fake JSON data as response
          resolve([200, order.data]);
        } else {
          reject([400, "Cannot add order"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_ORDER).reply(order => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (order && order.data) {
          // Passing fake JSON data as response
          resolve([200, order.data]);
        } else {
          reject([400, "Cannot update order"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_ORDER).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.order]);
        } else {
          reject([400, "Cannot delete order"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CART_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cartData) {
          // Passing fake JSON data as response
          resolve([200, cartData]);
        } else {
          reject([400, "Cannot get cart data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CUSTOMERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customerData) {
          // Passing fake JSON data as response
          resolve([200, customerData]);
        } else {
          reject([400, "Cannot get customers data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_CUSTOMER).reply(customer => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customer && customer.data) {
          // Passing fake JSON data as response
          resolve([200, customer.data]);
        } else {
          reject([400, "Cannot add customer"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_CUSTOMER).reply(customer => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customer && customer.data) {
          // Passing fake JSON data as response
          resolve([200, customer.data]);
        } else {
          reject([400, "Cannot update customer"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_CUSTOMER).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.customer]);
        } else {
          reject([400, "Cannot delete customer"]);
        }
      });
    });
  });

  mock.onGet(url.GET_SHOPS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shops) {
          // Passing fake JSON data as response
          resolve([200, shops]);
        } else {
          reject([400, "Cannot get shops data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_WALLET).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (wallet) {
          // Passing fake JSON data as response
          resolve([200, wallet]);
        } else {
          reject([400, "Cannot get wallet data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CRYPTO_ORDERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cryptoOrders) {
          // Passing fake JSON data as response
          resolve([200, cryptoOrders]);
        } else {
          reject([400, "Cannot get orders"]);
        }
      });
    });
  });

  mock.onGet(url.GET_INVOICES).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (invoiceList) {
          // Passing fake JSON data as response
          resolve([200, invoiceList]);
        } else {
          reject([400, "Cannot get invoices"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_INVOICE_DETAIL}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (invoiceList) {
          // Passing fake JSON data as response
          const { params } = config;
          const invoice = invoiceList.find(
            invoice => invoice.id.toString() === params.id.toString()
          );
          resolve([200, invoice]);
        } else {
          reject([400, "Cannot get invoice"]);
        }
      });
    });
  });

  mock.onGet(url.GET_PROJECTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (projects) {
          // Passing fake JSON data as response
          resolve([200, projects]);
        } else {
          reject([400, "Cannot get projects"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_PROJECT_DETAIL}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (projects) {
          // Passing fake JSON data as response
          const { params } = config;
          const project = projects.find(
            project => project.id.toString() === params.id.toString()
          );
          resolve([200, project]);
        } else {
          reject([400, "Cannot get project detail"]);
        }
      });
    });
  });

  mock.onGet(url.GET_TASKS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tasks) {
          // Passing fake JSON data as response
          resolve([200, tasks]);
        } else {
          reject([400, "Cannot get tasks"]);
        }
      });
    });
  });

  mock.onGet(url.GET_USERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (members) {
          // Passing fake JSON data as response
          resolve([200, members]);
        } else {
          reject([400, "Cannot get users"]);
        }
      });
    });
  });

  mock.onGet(url.GET_USER_PROFILE).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userProfile) {
          // Passing fake JSON data as response
          resolve([200, userProfile]);
        } else {
          reject([400, "Cannot get user profile"]);
        }
      });
    });
  });

  mock.onGet(url.GET_WEEKLY_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (weekData) {
          // Passing fake JSON data as response
          resolve([200, weekData]);
        } else {
          reject([400, "Cannot get wallet data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_YEARLY_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (yearData) {
          // Passing fake JSON data as response
          resolve([200, yearData]);
        } else {
          reject([400, "Cannot get wallet data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_MONTHLY_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (monthData) {
          // Passing fake JSON data as response
          resolve([200, monthData]);
        } else {
          reject([400, "Cannot get wallet data"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.TOP_SELLING_DATA}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { params } = config;
      setTimeout(() => {
        if (params && params.month) {
          // Passing fake JSON data as response

          var data = [];
          if (params.month === "jan") {
            data = janTopSellingData;
          } else if (params.month === "dec") {
            data = decTopSellingData;
          } else if (params.month === "nov") {
            data = novTopSellingData;
          } else if (params.month === "oct") {
            data = octTopSellingData;
          }
          resolve([200, data]);
        } else {
          reject([400, "Cannot get selling data"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_EARNING_DATA}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { params } = config;
      setTimeout(() => {
        if (params && params.month) {
          // Passing fake JSON data as response
          const { params } = config;
          var data = [];
          if (params.month === "jan") {
            data = janEarningData;
          } else if (params.month === "dec") {
            data = decEarningData;
          } else if (params.month === "nov") {
            data = novEarningData;
          } else if (params.month === "oct") {
            data = octEarningData;
          }
          resolve([200, data]);
        } else {
          reject([400, "Cannot get earning data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_PRODUCT_COMMENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productComments) {
          // Passing fake JSON data as response
          resolve([200, productComments]);
        } else {
          reject([400, "Cannot get comment data"]);
        }
      });
    });
  });

  mock.onPost(new RegExp(`${url.ON_LIKNE_COMMENT}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { data } = config;
      const { params } = JSON.parse(data);

      setTimeout(() => {
        if (productComments) {
          var modifiedProductComments = [...productComments];
          const commentIdx = (modifiedProductComments || []).findIndex(
            comment =>
              comment.commentId.toString() === params.commentId.toString()
          );
          if (commentIdx > -1) {
            if (
              params.replyId &&
              modifiedProductComments[commentIdx]["replies"]
            ) {
              const replyIdx = (
                modifiedProductComments[commentIdx]["replies"] || []
              ).findIndex(
                reply => reply.replyId.toString() === params.replyId.toString()
              );

              if (replyIdx > -1) {
                if (
                  modifiedProductComments[commentIdx]["replies"][replyIdx][
                  "hasLiked"
                  ]
                ) {
                  modifiedProductComments[commentIdx]["replies"][replyIdx][
                    "hasLiked"
                  ] = false;
                } else {
                  modifiedProductComments[commentIdx]["replies"][replyIdx][
                    "hasLiked"
                  ] = true;
                }
              }
            } else {
              if (modifiedProductComments[commentIdx]["hasLiked"]) {
                modifiedProductComments[commentIdx]["hasLiked"] = false;
              } else {
                modifiedProductComments[commentIdx]["hasLiked"] = true;
              }
            }
          }

          // Passing fake JSON data as response
          resolve([200, modifiedProductComments]);
        } else {
          reject([400, "Cannot add comment"]);
        }
      });
    });
  });

  mock.onPost(new RegExp(`${url.ON_ADD_REPLY}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { data } = config;
      const { params } = JSON.parse(data);

      setTimeout(() => {
        if (productComments) {
          const modifiedComments = [...productComments];
          const commentIdx = (modifiedComments || []).findIndex(
            comment =>
              comment.commentId.toString() === params.commentId.toString()
          );
          const today = new Date();
          const mins = today.getMinutes();
          if (commentIdx > -1) {
            var newReplyId = 1;
            if (
              modifiedComments[commentIdx]["replies"] &&
              modifiedComments[commentIdx]["replies"].length
            ) {
              const totalReplies = modifiedComments[commentIdx]["replies"];
              newReplyId = totalReplies[totalReplies.length - 1] + 1;
              const replyObj = {
                commentId: params.commentId,
                replyId: newReplyId,
                user: {
                  name: "Admin",
                  profile: "avatar1",
                },
                comment: params.replyText,
                time: `${mins} mins ago`,
                hasLiked: false,
              };
              modifiedComments[commentIdx]["replies"].push({ ...replyObj });
              modifiedComments[commentIdx]["showAddComment"] = false;
            } else {
              modifiedComments[commentIdx]["replies"] = [];
              const replyObj = {
                commentId: params.commentId,
                replyId: newReplyId,
                user: {
                  name: "Admin",
                  profile: "avatar1",
                },
                comment: params.replyText,
                time: `${mins} mins ago`,
                hasLiked: false,
              };
              modifiedComments[commentIdx]["replies"].push({ ...replyObj });
            }
          }

          // Passing fake JSON data as response
          resolve([200, modifiedComments]);
        } else {
          reject([400, "Cannot add comment"]);
        }
      });
    });
  });

  mock.onPost(new RegExp(`${url.ON_ADD_COMMENT}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { data } = config;
      const { params } = JSON.parse(data);

      setTimeout(() => {
        if (productComments) {
          const modifiedComments = [...productComments];

          const today = new Date();
          const mins = today.getMinutes();
          const commentObj = {
            commentId: modifiedComments.length + 1,
            user: {
              name: "Admin",
              profile: "avatar1",
            },
            comment: params.commentText,
            time: `${mins} mins ago`,
            hasLiked: false,
          };
          modifiedComments.push({ ...commentObj });
          productComments.push({ ...commentObj });

          // Passing fake JSON data as response
          resolve([200, modifiedComments]);
        } else {
          reject([400, "Cannot add comment"]);
        }
      });
    });
  });
};

export default fakeBackend;
