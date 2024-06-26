import { useTranslate } from '../../../main/shared/translate.js';
const { setBulk } = useTranslate();

setBulk({
    en: {
        'auth.span.login': 'Login',
        'auth.span.register': 'Register',
        'auth.span.remember': 'Remember',
        'auth.span.bad.password': 'Email or password is incorrect',
        'auth.span.register.error': 'Something went wrong, try again',
        'auth.span.email': 'email',
        'auth.span.password': 'password',
        'auth.span.password.again': 'password again',
        'auth.span.new.user': 'New User?',
        'auth.span.existing.user': 'Existing User?',
    },
    hu: {
        'auth.span.login': 'Bejelentkezés',
        'auth.span.register': 'Regisztráció',
        'auth.span.remember': 'Jegyezz meg',
        'auth.span.bad.password': 'Hibás email cím vagy jelszó',
        'auth.span.register.error': 'Hiba történt, próbáld újra',
        'auth.span.email': 'email',
        'auth.span.password': 'jelszó',
        'auth.span.password.again': 'jelszó ismét',
        'auth.span.new.user': 'Új felhasználó?',
        'auth.span.existing.user': 'Van már fiókod?',
    },
});
