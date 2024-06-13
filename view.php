<?php
require_once('../../config.php');

$cmid = required_param('id', PARAM_INT);
$cm = get_coursemodule_from_id('audiversoips', $cmid, 0, false, MUST_EXIST);

$course = $DB->get_record('course', array('id' => $cm->course), '*', MUST_EXIST);
$audiversoips = $DB->get_record('audiversoips', array('id' => $cm->instance), '*', MUST_EXIST);

require_login($course, false, $cm);
$context = context_module::instance($cm->id);

$PAGE->set_url('/mod/audiversoips/view.php', array('id' => $cm->id));
$PAGE->set_title(get_string('pluginname', 'mod_audiversoips'));
$PAGE->set_heading(get_string('pluginname', 'mod_audiversoips'));
$PAGE->set_context($context);
$redirect_url = new moodle_url('/mod/audiversoips/view.php', array('id' => $cmid));
if ($USER->id != 0) {
    $userId = $USER->id;
} else {
    $userId = false;
}
$quiz1_id = $audiversoips->quiz1_id;
$quiz2_id = $audiversoips->quiz2_id;

$grade_item = $DB->get_record('grade_items', array('itemmodule' => 'quiz', 'iteminstance' => $quiz1_id));
if ($grade_item) {
    $final_grade = $DB->get_record('grade_grades', array('itemid' => $grade_item->id, 'userid' => $USER->id));
    if ($final_grade) {
        $quiz1_grade = $final_grade->finalgrade;
    }
}else{
    $quiz1_grade = false;
}

$grade_item2 = $DB->get_record('grade_items', array('itemmodule' => 'quiz', 'iteminstance' => $quiz2_id));
if ($grade_item2) {
    $final_grade2 = $DB->get_record('grade_grades', array('itemid' => $grade_item2->id, 'userid' => $USER->id));
    if ($final_grade2) {
        $quiz2_grade = $final_grade2->finalgrade;
    }
}else{
	$quiz2_grade = false;
}

$quiz1_cmid = $DB->get_field('course_modules', 'id', array('instance' => $quiz1_id, 'module' => get_coursemodule_from_instance('quiz', $quiz1_id)->module));
$quiz2_cmid = $DB->get_field('course_modules', 'id', array('instance' => $quiz2_id, 'module' => get_coursemodule_from_instance('quiz', $quiz2_id)->module));
$quiz1_url = new moodle_url('/mod/quiz/view.php', array('id' => $quiz1_cmid));
$quiz2_url = new moodle_url('/mod/quiz/view.php', array('id' => $quiz2_cmid));
$game_init = file_get_contents(__DIR__.'/game/index.html');
$redirect_continue =  new moodle_url('game/game.html');
$redirect_testimonials =  new moodle_url('game/views/testimonials.html');
$redirect_final_game =  new moodle_url('game/views/final_game.html');


echo $OUTPUT->header();

?>
	

<script>
    var userId = <?php echo json_encode($userId); ?>;
    var redirectUrl = <?php echo json_encode($redirect_url->out(false)); ?>;
    var level = localStorage.getItem('level');
    var quiz1_grade = <?php echo json_encode($quiz1_grade); ?>;
    var quiz2_grade = <?php echo json_encode($quiz2_grade); ?>;
    var quiz1_url = <?php echo json_encode($quiz1_url->out(false)); ?>;
    var quiz2_url = <?php echo json_encode($quiz2_url->out(false)); ?>;
    var game_init = <?php echo json_encode($game_init); ?>;
	var redirect_game_continue = <?php echo json_encode($redirect_continue->out(false)); ?>;
    var redirect_game_testimonials = <?php echo json_encode($redirect_testimonials->out(false)); ?>;
    var redirect_game_final_game = <?php echo json_encode($redirect_final_game->out(false)); ?>;
	localStorage.setItem('redirectUrlQ1', quiz1_url);
	localStorage.setItem('redirectUrlQ2', quiz2_url);
    localStorage.setItem('redirectUrl', redirectUrl);
    if(userId) {
        localStorage.setItem('isLoggedIn', 'true');
    } else {
        localStorage.setItem('isLoggedIn', 'false');
    }
    localStorage.setItem('grade1', quiz1_grade);
    localStorage.setItem('grade2', quiz2_grade);

    
    if(level === null){
        document.body.innerHTML = game_init;
    }else{
        if (Number(level) == 7) {//cambiar por 7 si se corrige el comentario de abajo
            console.log('level: '+level);
            console.log('calificacion: '+quiz1_grade);
            if (!quiz1_grade) {
                window.location.href = redirect_game_continue;
                //window.location.href = quiz1_url;
            } else {
                if (Number(quiz1_grade) >= 3.5) {
                    localStorage.setItem('nota', level + redirect_game_testimonials);
                    localStorage.setItem('level', Number(level) + 1); //dejo comentado dado que al entrar al Mundo7 ya sube 1 level quedando en level 8
                    window.location.href = redirect_game_testimonials;
                } else if (quiz1_grade >= 0 && quiz1_grade < 3.5) {
                    //localStorage.setItem('level', Number(level) - 1);
                    window.location.href = redirect_game_continue;
                }
            }
        } else if (Number(level) == 15) {
            if (!quiz2_grade) {
                window.location.href = quiz2_url;
            } else {
                if (quiz2_grade >= 3.5) {
                    window.location.href = redirect_game_final_game;
                    //localStorage.setItem('level', Number(level) + 1); mismo comentario de arriba
                } else if (quiz2_grade >= 0 && quiz2_grade < 3.5) {
                    localStorage.setItem('level', Number(level) - 1);
                    window.location.href = redirect_game_continue;
                }
            }
        } else {
            window.location.href = redirect_game_continue;
        }
    }
</script>


<?php
echo $OUTPUT->footer();
?>