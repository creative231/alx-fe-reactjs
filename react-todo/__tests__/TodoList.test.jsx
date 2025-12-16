import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const button = screen.getByText("Add");

    await userEvent.type(input, "Test new todo");
    fireEvent.click(button);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles todo completed status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
