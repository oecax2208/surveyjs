// Type definitions for Survey JavaScript library v0.9.12
// Project: http://surveyjs.org/
// Definitions by: Andrew Telnov <https://github.com/andrewtelnov/>

import * as React from 'react';
export declare class SurveyQuestionMatrix extends React.Component<any, any> {
    private question;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
export declare class SurveyQuestionMatrixRow extends React.Component<any, any> {
    private question;
    private row;
    constructor(props: any);
    handleOnChange(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
