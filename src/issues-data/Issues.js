const issues = [{
    "domain": "Regular",
    "terms": [{
        "value": "Cannot access site without accepting",
        "laws": [{
            "lawName": "Consent Wall (R42, R43, A4-11)",
            "lawDescription": "Consent should not be regarded as freely given if the data subject has no genuine or free choice or is unable to refuse or withdraw consent without detriment."
        }]
    }, {
        "value": "No option to refuse",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "Options are pre-selected",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If choices are pre-selected an affirmative choice to accept these has not been made."
        }]
    }, {
        "value": "Language is confusing",
        "laws": [{
            "lawName": "Informed (A7-2)",
            "lawDescription": "If the data subject\u2019s consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding."
        }]
    }, {
        "value": "Cannot change my decision",
        "laws": [{
            "lawName": "Withdrawal (A7-3)",
            "lawDescription": "The data subject shall have the right to withdraw his or her consent at any time. 2The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. 3Prior to giving consent, the data subject shall be informed thereof. 4It shall be as easy to withdraw as to give consent."
        }]
    }, {
        "value": "Dialogs pop up even after making decision",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "I don\u2019t know what I\u2019m consenting to",
        "laws": [{
            "lawName": "Informed (A7-2)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "I cannot change some options",
        "laws": [{
            "lawName": "Specific (A4-11, A7-2)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "I don\u2019t know who the \u2018partners\u2019 are",
        "laws": [{
            "lawName": "Informed (A7-2)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "Information is missing or inaccessible",
        "laws": [{
            "lawName": "Information Provision (A13, A14)",
            "lawDescription": "Where personal data relating to a data subject are collected from the data subject, the controller shall, at the time when personal data are obtained, provide the data subject with all required information"
        }]
    }, {
        "value": "Changing my given consent is complex",
        "laws": [{
            "lawName": "Withdrawal (A7-3)",
            "lawDescription": "The data subject shall have the right to withdraw his or her consent at any time. 2The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. 3Prior to giving consent, the data subject shall be informed thereof. 4It shall be as easy to withdraw as to give consent."
        }]
    }]
}, {
    "domain": "Legal",
    "terms": [{
        "value": "Consent prevents access to service",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "If the data subject\u2019s consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding."
        }]
    }, {
        "value": "Consent or payment as options",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "n order to ensure that consent is freely given, consent should not provide a valid legal ground for the processing of personal data in a specific case where there is a clear imbalance between the data subject and the controller, in particular where the controller is a public authority and it is therefore unlikely that consent was freely given in all the circumstances of that specific situation. 2Consent is presumed not to be freely given if it does not allow separate consent to be given to different personal data processing operations despite it being appropriate in the individual case, or if the performance of a contract, including the provision of a service, is dependent on the consent despite such consent not being necessary for such performance."
        }]
    }, {
        "value": "Purposes are not explicit or specific enough",
        "laws": [{
            "lawName": "Specific (A4-11, A7-2)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."
        }]
    }, {
        "value": "Information is missing",
        "laws": [{
            "lawName": "Information Provision (A13, A14)",
            "lawDescription": "When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract."
        }]
    }, {
        "value": "Legal basis is incorrect",
        "laws": [{
            "lawName": "Legal Basis (A6)",
            "lawDescription": "Processing shall be lawful only if and to the extent that at one of the applicable legal basis is utilised."
        }]
    }, {
        "value": "Legal basis should be consent",
        "laws": [{
            "lawName": "Legal Basis (A6)",
            "lawDescription": "Processing shall be lawful only if and to the extent that the applicable legal basis of consent is utilised."
        }]
    }, {
        "value": "Consent should be explicit",
        "laws": [{
            "lawName": "Explicit Consent (A9)",
            "lawDescription": "Processing utilises special categories of personal data which is prohibited from being processed unless suitable explicit consent is obtained as per A9-1a."
        }]
    }, {
        "value": "Consent withdrawal conditions are not met",
        "laws": [{
            "lawName": "Withdrawal (A7-3)",
            "lawDescription": "The data subject shall have the right to withdraw his or her consent at any time. 2The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. 3Prior to giving consent, the data subject shall be informed thereof. 4It shall be as easy to withdraw as to give consent."
        }]
    }]
}, {
    "domain": "Hci",
    "terms": [{
        "value": "Choices for consent are not symmetric",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "Nudging towards giving consent",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "Interface blocks access",
        "laws": [{
            "lawName": "Freely Given (R43, A4-11)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. If there is no reject button an affirmative action to not consent cannot be made."
        }]
    }, {
        "value": "Controls for preference are confusing",
        "laws": [{
            "lawName": "Specific (A4-11, A7-2)",
            "lawDescription": "consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."
        }]
    }, {
        "value": "Wording of information is not specific",
        "laws": [{
            "lawName": "Information Provision (A13, A14)",
            "lawDescription": "Where personal data relating to a data subject are collected from the data subject, the controller shall, at the time when personal data are obtained, provide the data subject with all required information"
        }]
    }, {
        "value": "Disparity between expression of consent and withdrawal",
        "laws": [{
            "lawName": "Withdrawal (A7-3)",
            "lawDescription": "The data subject shall have the right to withdraw his or her consent at any time. 2The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. 3Prior to giving consent, the data subject shall be informed thereof. 4It shall be as easy to withdraw as to give consent."
        }]
    }]
}];

export default issues