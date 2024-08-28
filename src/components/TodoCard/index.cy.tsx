import TodoCard from ".";
describe("<TodoCard />", () => {
  it("should render todo data correctly", () => {
    const todo: Todo = {
      deadline: new Date(),
      description: "Test Todo",
      taskType: TaskType.CLEALLNING,
    };
    cy.mount(<TodoCard />);
  });
});
