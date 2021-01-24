import Api from '../../Api'

export default {
    allSubjects(page) {
        return Api.get('teacher/subject?page='+ page);
    },
    addSubject(form) {
        return Api.post('teacher/subject', form);
    }
}
