import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExcelRenderer } from "react-excel-renderer";

function App() {
	const history = useNavigate();
	const [formData, setFormData] = useState({
		unit: "SoE",
		dep: "",
		code: "",
		name: "",
		type: "Course",
		credit: "",
		lang: "English",
		preReq: "",
		coReq: "",
		offered: "",
		term: "",
		crn: "",
		time: "",
		instructor: "",
		instructorTitle: "",
		category: "Part-Time",
		desc: "",
		goal: "",
		delivery: "",
		outcome: "",
		mode: "",
		oral: "",
		techReq: "",
		material: "",
		grading: "",
		passingGrade: 60,
		excel: null,
	});

	function handleChange(field, value) {
		setFormData({
			...formData,
			[field]: value,
		});
	}

	function resetForm() {
		setFormData({
			unit: "SoE",
			dep: "",
			code: "",
			name: "",
			type: "Course",
			credit: "",
			lang: "English",
			preReq: "",
			coReq: "",
			offered: "Fall",
			term: "Fall",
			crn: "",
			time: "",
			instructor: "",
			instructorTitle: "",
			category: "Part-Time",
			desc: "",
			goal: "",
			delivery: "",
			outcome: "",
			mode: "",
			oral: "",
			techReq: "",
			material: "",
			grading: "",
			passingGrade: 60,
			excel: null,
		});
	}

	const fileHandler = (event) => {
		let fileObj = event.target.files[0];

		ExcelRenderer(fileObj, (err, resp) => {
			if (err) {
				console.log(err);
			} else {
				handleChange("excel", resp);
			}
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		console.log("handleSubmit");
		console.log(formData);

		history("/Syllabus", { state: { formData } });
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<div className="field">
				<label htmlFor="unit" className="label">
					Unit:&nbsp;
				</label>
				<div className="control">
					<div className="select">
						<select
							name="unit"
							id="unit"
							value={formData.unit}
							onChange={(e) => handleChange("unit", e.target.value)}
							required
							maxLength={50}
						>
							<option value="SoE">School of Engineering</option>
							<option value="BS">Business School</option>
							<option value="SoA">School of Architecture</option>
							<option value="SoM">School of M</option>
							<option value="FAS">Faculty of Arts and Sciences</option>
						</select>
					</div>
				</div>
			</div>
			<div className="field">
				<label htmlFor="dep" className="label">
					Department:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="text"
						name="dep"
						id="dep"
						value={formData.dep}
						onChange={(e) => handleChange("dep", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label i" htmlFor="code">
					Course Code:
				</label>

				<div className="control">
					<input
						required
						className="input is-primary"
						type="text"
						name="code"
						id="code"
						value={formData.code}
						onChange={(e) => handleChange("code", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="name">
					Course Title:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={(e) => handleChange("name", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="type">
					Course Type:
				</label>
				<div className="control">
					<div className="select">
						<select
							required
							name="type"
							id="type"
							value={formData.type}
							onChange={(e) => handleChange("type", e.target.value)}
						>
							<option value="Core">Course</option>
							<option value="Lab">Lab</option>
							<option value="Project">Project</option>
							<option value="Seminar">Seminar</option>
							<option value="Workshop">Workshop</option>
						</select>
					</div>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="credit">
					Nb of Credits:&nbsp;
				</label>
				<div className="control">
					<input
						required
						type="number"
						name="credit"
						id="credit"
						value={formData.credit}
						onChange={(e) => handleChange("credit", e.target.value)}
						min={0}
						max={3}
						className="input is-primary"
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="lang" className="label">
					Language:&nbsp;
				</label>
				<div className="control">
					<div className="select">
						<select
							required
							name="lang"
							id="lang"
							value={formData.lang}
							onChange={(e) => handleChange("lang", e.target.value)}
						>
							<option value="English">English</option>
							<option value="French">French</option>
							<option value="Arabic">Arabic</option>
						</select>
					</div>
				</div>
			</div>
			&nbsp;
			<div className="field">
				<label htmlFor="preReq" className="label">
					PreRequisites:
				</label>
				<div className="control">
					<input
						className="input is-primary"
						type="text"
						name="preReq"
						id="preReq"
						value={formData.preReq}
						onChange={(e) => handleChange("preReq", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="offered" className="label">
					Terms Offered:
				</label>
				<div className="control">
					<div className="select">
						<select
							name="offered"
							id="offered"
							value={formData.offered}
							onChange={(e) => handleChange("offered", e.target.value)}
						>
							<option value="Fall">Fall</option>
							<option value="Winter">Spring</option>
							<option value="Summer">Summer</option>
							<option value="Fall and Spring">Fall and Spring</option>
						</select>
					</div>
				</div>
			</div>
			<div className="field">
				<label htmlFor="term" className="label">
					Current Term:
				</label>
				<div className="control">
					<div className="select">
						<select
							name="term"
							id="term"
							value={formData.term}
							onChange={(e) => handleChange("term", e.target.value)}
						>
							<option value="Fall">Fall</option>
							<option value="Winter">Spring</option>
							<option value="Summer">Summer</option>
						</select>
					</div>
				</div>
			</div>
			<div className="field">
				<label htmlFor="crn" className="label">
					CRN:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="number"
						name="crn"
						id="crn"
						value={formData.crn}
						onChange={(e) => handleChange("crn", e.target.value)}
						min={10000}
						max={99999}
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="time" className="label">
					Time:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="datetime-local"
						name="time"
						id="time"
						value={formData.time}
						onChange={(e) => handleChange("time", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="instructor" className="label">
					Instructor Name:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="text"
						name="instructor"
						id="instructor"
						value={formData.instructor}
						onChange={(e) => handleChange("instructor", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="instructorTitle" className="label">
					Instructor Title:
				</label>
				<div className="control">
					<input
						className="input is-primary"
						type="text"
						name="instructorTitle"
						id="instructorTitle"
						value={formData.instructorTitle}
						onChange={(e) => handleChange("instructorTitle", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="category" className="label">
					Category:
				</label>
				<div className="control">
					<div className="select">
						<select
							required
							name="category"
							id="category"
							value={formData.category}
							onChange={(e) => handleChange("category", e.target.value)}
						>
							<option value="Part-Time">Part-Time</option>
							<option value="Full-Time">Full-Time</option>
						</select>
					</div>
				</div>
			</div>
			<div className="field">
				<label htmlFor="desc" className="label">
					Course Description:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="desc"
						id="desc"
						value={formData.desc}
						onChange={(e) => handleChange("desc", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="goal" className="label">
					Course Goal:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="goal"
						id="goal"
						value={formData.goal}
						onChange={(e) => handleChange("goal", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="delivery" className="label">
					Course Delivery:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="delivery"
						id="delivery"
						value={formData.delivery}
						onChange={(e) => handleChange("delivery", e.target.value)}
						width="100%"
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="outcome" className="label">
					Learning Outcome:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="outcome"
						id="outcome"
						value={formData.outcome}
						onChange={(e) => handleChange("outcome", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="mode" className="label">
					Mode of Instruction:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="mode"
						id="mode"
						value={formData.mode}
						onChange={(e) => handleChange("mode", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="oral" className="label">
					Oral Communication:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="oral"
						id="oral"
						value={formData.oral}
						onChange={(e) => handleChange("oral", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="techReq" className="label">
					Technical Requirement:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="techReq"
						id="techReq"
						value={formData.techReq}
						onChange={(e) => handleChange("techReq", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="material" className="label">
					Course Material:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="material"
						id="material"
						value={formData.material}
						onChange={(e) => handleChange("material", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="grading" className="label">
					Grading:
				</label>
				<div className="control">
					<textarea
						required
						className="textarea is-primary"
						name="grading"
						id="grading"
						value={formData.grading}
						onChange={(e) => handleChange("grading", e.target.value)}
					></textarea>
				</div>
			</div>
			<div className="field">
				<label htmlFor="passingGrade" className="label">
					Passing Grade:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="number"
						name="passingGrade"
						id="passingGrade"
						min={50}
						max={80}
						value={formData.passingGrade}
						onChange={(e) => handleChange("passingGrade", e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="excel" className="label">
					Upload excel file of the course Schedule:
				</label>
				<div className="control">
					<input
						required
						className="input is-primary"
						type="file"
						name="excel"
						id="excel"
						accept=".xlsx, .xls"
						onChange={fileHandler}
					/>
				</div>
			</div>
			<br />
			<br />
			<input
				type="submit"
				value="submit"
				className="button is-primary is-rounded"
				formTarget="_blank"
			/>
			<input
				type="reset"
				className="button is-warning is-rounded"
				onClick={resetForm}
			/>
			<button
				className="button is-info is-rounded"
				onClick={() => window.print()}
			>
				{" "}
				Print Page
			</button>
		</form>
	);
}

export default App;
