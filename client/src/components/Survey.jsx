import React from 'react';
import CheckboxOrRadioGroup from './SurveyHelpers/CheckboxOrRadioGroup.js';
import SingleInput from './SurveyHelpers/SingleInput.js';
import TextArea from './SurveyHelpers/TextArea.js';
import Select from './SurveyHelpers/Select.js';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxTuitionOptions: [],
      tuition: '',
      average_gpa: '',
      average_sat_score: '',
      majorOptions: [],
      majors: [],
      sizeRangeOptions: [],
      size: [],
      sportsDivisionOptions: [],
      sports_division: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handletuition = this.handletuition.bind(this);
    this.handleaverage_gpaChange = this.handleaverage_gpaChange.bind(this);
    this.handleaverage_sat_scoreChange = this.handleaverage_sat_scoreChange.bind(this);
    this.handleMajorSelection = this.handleMajorSelection.bind(this);
    this.handlesize = this.handlesize.bind(this);
    this.handlesports_division = this.handlesports_division.bind(this);
  }
  componentDidMount() {
    fetch('./startingData.json')
			.then(res => res.json())
			.then(data => {
  console.log(data);
  this.setState({
    maxTuitionOptions: data.maxTuitionOptions,
    tuition: data.tuition,
    average_gpa: data.average_gpa,
    average_sat_score: data.average_sat_score,
    majorOptions: data.majorOptions,
    majors: data.major,
    sizeRangeOptions: data.sizeRangeOptions,
    size: data.size,
    sportsDivisionOptions: data.sportsDivisionOptions,
    sports_division: data.sports_division
  });
});
  }
  
  handletuition(e) {
    this.setState({ tuition: e.target.value }, () => console.log('Max Tuition:', this.state.tuition));
  }

  handleaverage_gpaChange(e) {
    this.setState({ average_gpa: e.target.value }, () => console.log('average_gpa:', this.state.average_gpa));
  }

  handleaverage_sat_scoreChange(e) {
    this.setState({ average_sat_score: e.target.value }, () => console.log('average_sat_score:', this.state.average_sat_score));
  }

  handleMajorSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.majors.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.majors.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.majors, newSelection];
    }
    this.setState({ majors: newSelectionArray }, () => console.log('major selection', this.state.majors));
  }
  handlesize(e) {
    this.setState({ size: e.target.value.split('-') }, () => console.log('size range', this.state.size));
  }
  handlesports_division(e) {
    this.setState({ sports_division: e.target.value }, () => console.log('Sports Division', this.state.sports_division));
  }
  
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      tuition: '',
      average_gpa: '',
      average_sat_score: '',
      majors: [],
      size: [],
      sports_division: []
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const userInfo = {
      tuition: this.state.tuition,
      average_gpa: this.state.average_gpa,
      average_sat_score: this.state.average_sat_score,
      majors: this.state.majors,
      size: this.state.size,
      sports_division: this.state.sports_division
    };

    console.log('Send this in a POST request:', userInfo);
    
    this.props.sendSurveyInfo(userInfo);

    this.handleClearForm(e);
  }
  render() {
    return (
    <form className="container" onSubmit={this.handleFormSubmit}>
				<h5><b>UNIVERSITY PREFERENCES</b></h5>
				<Select
					name={'maxTuition'}
          placeholder={'Max tuition per year'}
					controlFunc={this.handletuition}
					options={this.state.maxTuitionOptions}
					selectedOption={this.state.tuition} />
        <SingleInput
					inputType={'text'}
					title={'ESTIMATED AVERAGE GPA'}
					name={'average_gpa'}
					controlFunc={this.handleaverage_gpaChange}
					content={this.state.average_gpa}
					placeholder={'Type estimated average GPA here'} />
        <SingleInput
					inputType={'text'}
					title={'SAT SCORE'}
					name={'average_sat_score'}
					controlFunc={this.handleaverage_sat_scoreChange}
					content={this.state.average_sat_score}
					placeholder={'Type your SAT Score here'} />
				<CheckboxOrRadioGroup
					title={'WHICH MAJORS ARE YOU INTERESTED IN?'}
					setName={'majors'}
					type={'checkbox'}
					controlFunc={this.handleMajorSelection}
					options={this.state.majorOptions}
					selectedOptions={this.state.majors} />
        <Select
					name={'sizeRange'}
					placeholder={'Preferred student body size'}
					controlFunc={this.handlesize}
					options={this.state.sizeRangeOptions}
					selectedOption={this.state.size} />
				<CheckboxOrRadioGroup
					title={'WHICH SPORTS DIVISION ARE YOU LOOKING FOR?'}
					setName={'sportsDivision'}
					type={'checkbox'}
					controlFunc={this.handlesports_division}
					options={this.state.sportsDivisionOptions}
					selectedOptions={this.state.sports_division} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
          className="btn"
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
    </form>
    );
  }
}

export default Survey;