<?php
function audiversoips_add_instance($audiversoips) {
    global $DB, $COURSE, $PAGE;

echo "<pre>";
echo $audiversoips->section;
      echo "</pre>";
    $audiversoips->timecreated = time();

    // Obtiene el ID del módulo para "quiz"
    $moduleid = $DB->get_field('modules', 'id', array('name' => 'quiz'), MUST_EXIST);

    // Crea el primer quiz
    $quiz1 = new stdClass();
    $quiz1->modulename = 'quiz';
    $quiz1->module = $moduleid;
    $quiz1->course = $COURSE->id;
    $quiz1->section = $audiversoips->section; // Usa la sección actual aquí
    $quiz1->name = 'audiversoipsquiz1';
    $quiz1->intro = 'Este es el cuestionario del nivel 7, debes aprobarlo con una calificacion mayor a 3.5 para pasar al siguiente nivel, de lo contrario bajarás al nivel anterior. IMPORTANTE: En caso de que seas administrador para hacer este quiz debes pasarte a rol Estudiante';
	$quiz1->quizpassword = '';
    $quiz1->visible = 1;
    $quiz1->timeopen = 0;
    $quiz1->timeclose = 0;
    $quiz1->introformat = FORMAT_MOODLE;
    $quiz1->grade = 0;
    $quiz1->questiondecimalpoints = 2;
    $quiz1 = add_moduleinfo($quiz1, $COURSE);

    // Guarda los id de los cuestionarios en la instancia de audiverso
    $audiversoips->quiz1_id = $quiz1->instance;

    // Crea el segundo quiz
    $quiz2 = new stdClass();
    $quiz2->modulename = 'quiz';
    $quiz2->module = $moduleid;
    $quiz2->course = $COURSE->id;
    $quiz2->section = $audiversoips->section; // Usa la sección actual aquí
    $quiz2->name = 'audiversoipsquiz2';
    $quiz2->intro = 'Este es el cuestionario del nivel 14, debes aprobarlo con una calificacion mayor a 3.5 para pasar al siguiente nivel, de lo contrario bajarás al nivel anterior. IMPORTANTE: En caso de que seas administrador para hacer este quiz debes pasarte a rol Estudiante';
	$quiz2->quizpassword = '';
    $quiz2->visible = 1;
    $quiz2->timeopen = 0;
    $quiz2->timeclose = 0;
    $quiz2->introformat = FORMAT_MOODLE;
    $quiz2->grade = 0;
    $quiz2->questiondecimalpoints = 2;
    $quiz2 = add_moduleinfo($quiz2, $COURSE);

    // Guarda los id de los cuestionarios en la instancia de audiverso
    $audiversoips->quiz2_id = $quiz2->instance;

    $audiversoips->id = $DB->insert_record("audiversoips", $audiversoips);

    return $audiversoips->id;
}




function audiversoips_update_instance($audiversoips) {
    global $DB;

    $audiversoips->timemodified = time();
    $audiversoips->id = $audiversoips->instance;

    $result = $DB->update_record("audiversoips", $audiversoips);

    return $result;
}

function audiversoips_delete_instance($id) {
    global $DB;

    if (! $audiversoips = $DB->get_record("audiversoips", array("id"=>$id))) {
        return false;
    }

    $result = $DB->delete_records("audiversoips", array("id"=>$id));

    return $result;
}
