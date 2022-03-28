// level {3}

const getUsers = async (users) => {
    const new_users = [];
    users.forEach((elm,ind) =>{
        elm.id = ind;
        new_users.push(elm);
    })
    return new_users;
  }