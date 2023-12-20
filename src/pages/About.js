import React, { useState } from 'react';
import backgroundImage from '../images/your-image.jpg';
import "../styles/styles.css";
const AboutUs = () => {
    const [vacancyCount, setVacancyCount] = useState(15);
    const [companyCount, setCompanyCount] = useState(25);

    const overlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
    };

    return (
        <>
            <section className="sectionAbout sectionAbout-1" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                <div style={overlayStyle}>
                    <h2>
                        <br />About Us<br />
                    </h2>
                </div>
            </section>
            <section className="sectionAbout sectionAbout-2">
                <div>
                    <hr className="hrStyle" />
                    <h2>
                        <br/>House Burger<br />
                    </h2>
                    <p>
                        Ресторан основал таинственный и чрезвычайно талантливый шеф-повар по имени Артур Карлос.
                        Артур был человеком с богатым воображением и страстью к кулинарии. Он мечтал создать место,
                        где каждый посетитель сможет насладиться не просто бургером, а настоящим произведением искусства.gi
                    </p>
                </div>
            </section>
            <section className="sectionAbout sectionAbout-3">
                <hr className="hrStyle" />
                <h2>
                    <br /><br />
                </h2>
                <table className="tableStyle">
                    <thead>
                    <tr>
                        <th className="thTdStyle">Category</th>
                        <th className="thTdStyle">Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="thTdStyle">Vacancies</td>
                        <td className="thTdStyle">{vacancyCount}</td>
                        <td>
                            <button onClick={() => setVacancyCount(vacancyCount + 1)}>Increase</button>
                            <button onClick={() => setVacancyCount(Math.max(0, vacancyCount - 1))}>Decrease</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="thTdStyle">Companies</td>
                        <td className="thTdStyle">{companyCount}</td>
                        <td>
                            <button onClick={() => setCompanyCount(companyCount + 1)}>Increase</button>
                            <button onClick={() => setCompanyCount(Math.max(0, companyCount - 1))}>Decrease</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AboutUs;