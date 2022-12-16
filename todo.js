const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let todayDate = new Date();
    const today = formattedDate(todayDate);
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    let todayDate = new Date();
    const today = formattedDate(todayDate);
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    let todayDate = new Date();
    const today = formattedDate(todayDate);
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    let todayDate = new Date();
    const today = formattedDate(todayDate);
    return list
      .map((todo) => {
        return `[${todo.completed ? "x" : " "}] ${todo.title} ${
          todo.dueDate !== today ? todo.dueDate : " "
        }`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
