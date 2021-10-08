interface PagesType {
  title: string;
  content: string;
  path: string;
}

export const Pages = {
  home: {
    title: 'Geekster | Home',
    content: 'Geekster',
    path: '/'
  },
  programs: {
    title: 'Geekster | Programs',
    content: 'Geekster Programs',
    path: '/programs'
  },
  modules: {
    title: 'Geekster | Modules',
    content: 'Geekster Modules',
    path: '/Modules'
  },
  courses: {
    title: 'Geekster | Courses',
    content: 'Geekster Courses',
    path: '/courses'
  },
  topics: {
    title: 'Geekster | topics',
    content: 'Geekster topics',
    path: '/topics'
  },
  login: {
    title: 'Login | Login to the Portal',
    content: 'Login to the Portal',
    path: '/login'
  },
  studyMaterial: {
    title: 'Geekster | Study Material',
    content: 'Study Material',
    path: '/studyMaterial'
  },
  assignments: {
    title: 'Geekster | Assignments',
    content: 'Geekster Assignments',
    path: '/assignments'
  },
  tests: {
    title: 'Geekster | Geekster Tests',
    content: 'Geekster Tests',
    path: '/tests'
  },
  students: {
    title: 'Geekster | Geekster Students',
    content: 'Students',
    path: '/students'
  },
  teachers: {
    title: 'Geekster | Geekster Teachers',
    content: 'Geekster Teachers',
    path: '/teachers'
  },
  roles: {
    title: 'Geekster | Geekster Roles',
    content: 'Geekster Roles',
    path: '/roles'
  },
  newStudent: {
    title: 'Geekster | Geekster New Student',
    content: 'New Student',
    path: '/newStudent'
  }
};

export const Paths: { [key: string]: PagesType } = {
  '/': Pages.home,
  '/programs': Pages.programs,
  '/modules': Pages.modules,
  '/courses': Pages.courses,
  '/topics': Pages.topics,
  '/login': Pages.login,
  '/studyMaterial': Pages.studyMaterial,
  '/assignments': Pages.assignments,
  '/tests': Pages.tests,
  '/students': Pages.students,
  '/teachers': Pages.teachers,
  '/roles': Pages.roles,
  '/students/newStudent': Pages.newStudent
};
