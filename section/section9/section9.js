function userIdList(data) {
  let userIds = new Set();
  data.forEach((item) => {
    userIds.add(item.userId);
  });
  return Array.from(userIds);
}

function fixData(data) {
  let userIds = new Set();
  data.forEach((item) => {
    userIds.add(item.userId);
  });
  let result = [];
  userIds.forEach((userId) => {
    let userItems = data.filter((item) => item.userId === userId);
    let userOutput = {
      userId: userId,
      datas: userItems.map((item) => {
        return { id: item.id, title: item.title, body: item.body };
      }),
    };
    result.push(userOutput);
  });
  return result;
}

module.exports = { userIdList, fixData };
