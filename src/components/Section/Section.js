import React from "react";
import './Section.scss';
import classnames from "classnames";

function Section({ className, children, type }) {
    const sectionCls = classnames(`section__${type}`, className);

    return (
        <section className={sectionCls}>
            {children}
        </section>
    );
}

export default Section;