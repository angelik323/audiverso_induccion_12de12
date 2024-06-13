<?php

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot.'/course/moodleform_mod.php');

class mod_audiversoips_mod_form extends moodleform_mod {

    function definition() {
        global $CFG;

        $mform = $this->_form;

        // Name field
        $mform->addElement('text', 'name', get_string('modulename', 'mod_audiversoips'));
        $mform->setType('name', PARAM_TEXT);
        $mform->addRule('name', get_string('required'), 'required', null, 'client');

        // Adding the "intro" and "introformat" fields
        if ($CFG->version >= 2015051100) {
            $this->standard_intro_elements();
        } else {
            $this->add_intro_editor();
        }

        // Adding the rest of mod_audiversoips settings, spreading all them into this fieldset
        // or adding more fieldsets ('header' elements) if needed for better logic.

        $this->standard_coursemodule_elements();

        // Add standard buttons, common to all modules
        $this->add_action_buttons();
    }
}
