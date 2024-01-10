import { useLocation } from "react-router-dom";

import { OutTable } from "react-excel-renderer";
function Syllabus() {
	const location = useLocation();
	const formData = location.state ? location.state.formData : null;

	const {
		unit,
		dep,
		code,
		name,
		type,
		credit,
		lang,
		preReq,
		offered,
		term,
		crn,
		time,
		instructor,
		instructorTitle,
		category,
		desc,
		goal,
		delivery,
		outcome,
		mode,
		oral,
		techReq,
		material,
		grading,
		passingGrade,
		excel,
	} = formData;
	return (
		<>
			<br id="generalInfo" />
			<main className="has-text-left">
				<section>
					<nav className="level">
						{unit  && (
							<div className="level-item has-text-centered">
								<div>
									<strong className="main-topic has-text-info heading">
										Academic unit:
									</strong>
									<p className="title has-text-primary">{unit}</p>
								</div>
							</div>
						)}

						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									Department:
								</strong>
								<p className="title has-text-primary">{dep}</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									code:
								</strong>
								<p className="title has-text-primary">{code}</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									title:
								</strong>
								<p className="title has-text-primary">{name}</p>
							</div>
						</div>

						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									Type:
								</strong>
								<p className="title has-text-primary">{type}</p>
							</div>
						</div>
						{preReq && (
							<div className="level-item has-text-centered">
								<div>
									<strong className="main-topic has-text-info heading">
										Pre-Reqs:
									</strong>
									<p className="title has-text-primary">{preReq}</p>
								</div>
							</div>
						)}
					</nav>

					<nav className="level">
						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									Nb of Credits:
								</strong>
								<p className="title has-text-primary">{credit}</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									Language
								</strong>
								<p className="title has-text-primary">{lang}</p>
							</div>
						</div>
						{offered && (
							<div className="level-item has-text-centered">
								<div>
									<strong className="main-topic has-text-info heading">
										Offered
									</strong>
									<p className="title has-text-primary">{offered}</p>
								</div>
							</div>
						)}

						{term && (
							<div className="level-item has-text-centered">
								<div>
									<strong className="main-topic has-text-info heading">
										Current:
									</strong>
									<p className="title has-text-primary">{term}</p>
								</div>
							</div>
						)}

						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									CRN
								</strong>
								<p className="title has-text-primary">{crn}</p>
							</div>
						</div>
						<div className="level-item has-text-centered">
							<div>
								<strong className="main-topic has-text-info heading">
									Schedule
								</strong>
								<p id="preReqs" className="title has-text-primary">
									{time}
								</p>
							</div>
						</div>
					</nav>
				</section>

				<section className="instructor section hero is-primary is-small">
					<div className="container content hero-body columns is-gapless is-large">
						<figure className="iamge is-128x128 column is-one-third">
							<img
								src="/Picture1.png"
								alt="Pascal Damien"
								className=" is-rounded"
								width="200"
								height="200"
							/>
						</figure>
						<div className="column is-two-third">
							<h2 className="section-Title subtitle">
								<strong className="has-text-info">Instructor </strong>
							</h2>

							<p className="topic">
								<strong className="main-topic has-text-dark">
									Name and Title:
								</strong>
								{instructor}{" "}
								{instructorTitle && <span>, {instructorTitle}</span>}
							</p>
							<br />
							<p className="topic">
								<strong className="main-topic has-text-dark">Category:</strong>
								{category}
							</p>
						</div>
					</div>
				</section>
				<section id="desc" className="Course-info section">
					<h2 className="section-Title subtitle">
						<strong className="has-text-info">Course Core Information</strong>
					</h2>

					<div className="container content columns">
						<article className="desc column is-one-third ">
							<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
								Course Description
							</strong>
							<p className="topic">{desc}</p>
						</article>
						<br id="olgoals" />
						<article className="goals column is-one-third">
							<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
								Course Goals
							</strong>
							<p>{goal}</p>
						</article>
						<br />
						<article className="mode column is-one-third ">
							<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
								Delivery Mode
							</strong>

							<p className="topic">{delivery}</p>
						</article>
					</div>
				</section>

				<section id="learningOutcomes" className="learningOutcomes section">
					<h2 className="section-Title subtitle ">
						<strong className="has-text-info"> Course Learning Outcomes</strong>
					</h2>
					<strong className="subtitle is-5 has-text-weight-semibold has-text-primary ">
						After a succesful completion of the course,students will be able to:
					</strong>
					<div className="container content">
						<p>{outcome}</p>
					</div>
				</section>

				<section id="generalReqs" className="generalReq section">
					<h2 id="delivery" className="section-Title subtitle">
						<strong className="has-text-info">
							{" "}
							Course General Requirements
						</strong>
					</h2>

					<article className="container content columns">
						<div className="delivery column is-one-third">
							<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
								Delivery Mode
							</strong>
							<p className="topic" id="oral">
								{mode}
							</p>
						</div>
						<br />
						<div className="oral column is-one-third">
							<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
								Oral Requirements
							</strong>
							<p id="technical" className="topic">
								{oral}
							</p>
						</div>
						<br />
						<div className="technical column is-one-third">
							<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
								Technical Requirements
							</strong>
							<p>{techReq}</p>
						</div>
					</article>
				</section>

				<section id="timeTable" className="Timetable section">
					<h2 id="courseTimetable" className="section-title subtitle">
						<strong className="has-text-info">Course Timetable</strong>
					</h2>
					<div className="table-container content ">
						<OutTable
							data={excel.rows}
							columns={excel.cols}
							tableClassName="ExcelTable2007 table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
							tableHeaderRowClass="potato"
							style={{
								width: "100%",
								fontSize: "1.5rem",
								textAlign: "center",
								margin: "10px",
							}}
						/>
						<br />
						<p>
							<strong className="has-text-weight-bold has-text-danger">
								Schedule of Holidays, Make-up Sessions, Evalutions dates and
								Deadlines for Assignments.
							</strong>
							USEK
							<strong className="has-text-weight-bold has-text-danger">
								Academic calender
							</strong>
							can be found at
							<a id="calender" href="www.usek.edu.lb.">
								www.usek.edu.lb.
							</a>
						</p>
					</div>
				</section>
				<section id="material" className="material section">
					<h2 className="section-title subtitle">
						<strong className="has-text-info">Course Material</strong>
					</h2>
					<div className="table-container content ">
						<table className="table is-bordered is-striped is-narrow is-hoverable table-cell-border has-text-centered">
							<thead>
								<tr className="has-background-primary">
									<th className="has-text-white">
										&nbsp;&nbsp;&nbsp;
										<br />
										Required Texts&nbsp;&nbsp;&nbsp;
									</th>
									<th className="has-text-white">
										&nbsp;&nbsp;&nbsp;
										<br />
										Handouts&nbsp;&nbsp;&nbsp;&nbsp;
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="has-background-warning">
									<td>
										&nbsp;&nbsp;&nbsp;
										<br />
										Supplemental References&nbsp;&nbsp;&nbsp;
									</td>
									<td></td>
								</tr>
								<tr className="has-background-danger has-text-white">
									<td>
										&nbsp;&nbsp;&nbsp;
										<br />
										Required Materials&nbsp;&nbsp;&nbsp;
									</td>
									<td>{material}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<section id="grading" className="section Grading">
					<h2 className="section-title subtitle">
						<strong className="has-text-info">Course Grading System</strong>
					</h2>
					<div className="container content">
						{grading}

						<p
							id="passing"
							className="has-text-warning-dark has-text-weight-bold"
						>
							All course grades will be regularly shared with students on the
							e-learning platform. The course final examinations date will be
							published by the Registrar Office in due time. No test or
							examination shall be given during the last two weeks before the
							regular examination period.
						</p>
						<strong className="subtitle is-5 has-text-weight-semibold has-text-primary">
							Passing Grade
						</strong>
						<p>
							A minimum grade of
							<span className="has-text-weight-bold has-text-danger">
								&nbsp;{passingGrade}
							</span>{" "}
							is required for this course. The Grading policy can be found in
							the
							<span className="has-text-weight-bold has-text-danger">
								Academic Rules and Regulations
							</span>
							Academic Rules and Regulations published on the website
						</p>
					</div>
				</section>
			</main>

			
			<footer className="footer">
				<div className="content has-text-centered">
					<p>
						<strong>GIN446 Curriculum</strong> by &nbsp;
						<a>Asif Alam</a>, Hope you enjoyed the visit😊
					</p>
				</div>
			</footer>
		</>
	);
}

export default Syllabus;
