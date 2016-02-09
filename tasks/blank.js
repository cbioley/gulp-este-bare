import del from 'del';

function removeFiles() {
  del([
    'src/browser/app/Footer.react.js',
    'src/browser/app/Header.react.js',
    'src/browser/auth/Login.react.js',
    'src/browser/auth/Login.scss',
    'src/browser/auth/Logout.react.js',
    'src/browser/auth/Page.react.js',
    'src/browser/lib/focusInvalidField.js',
    'src/browser/lib/logRenderTime.js',
    'src/browser/me/Page.react.js',
    'src/browser/me/Page.scss',
    'src/browser/me/Profile.react.js',
    'src/browser/me/Settings.react.js',
    'src/browser/todos/Buttons.react.js',
    'src/browser/todos/Buttons.scss',
    'src/browser/todos/NewTodo.react.js',
    'src/browser/todos/NewTodo.scss',
    'src/browser/todos/Page.react.js',
    'src/browser/todos/Todo.react.js',
    'src/browser/todos/Todo.scss',
    'src/browser/todos/Todos.react.js',
    'src/common/todos/actions.js',
    'src/common/todos/reducer.js',
    'src/common/todos/todo.js',
    'src/common/ui/actions.js',
    'src/common/ui/reducer.js',
    'src/server/api/auth.js',
    'src/server/api/todos.js'
  ]);
}

function replaceFiles() {

}

export default function (gulp) {
  gulp.task('blank', () => {
    removeFiles();
    replaceFiles();
    console.log('Yay!');
  });
}
