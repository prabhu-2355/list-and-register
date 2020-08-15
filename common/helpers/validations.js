const validation = {
  userName: {
    presence: {
      message: '^Please enter valid username'
    },
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z"
    }
  },
  name: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid username'

    },
  },
  dob: {
  	presence: {
      message: '^Please enter valid Date of birth'
    },
  	datetime: {
  		dateOnly: true
  	}
  },
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },
  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters'
    }
  },
  mobileIndia: {
    format: {
      pattern: "[0-9]+",
      flags: "i",
      message: "can only contain 0-9"
    },
    presence: {
      allowEmpty: false,
      message: '^Your mobile must be greater thans 9 characters '
    },
  	length: {
      minimum: 10,
      message: '^Your mobile must be greater thans 9 characters'
    }
  },
  countryCode: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid countryCode'
    },
  },
  otp: {
    format: {
      pattern: "[0-9]+",
      flags: "i",
      message: "can only contain 0-9"
    },
    length: {
      minimum: 6,
      message: '^Your otp number must be 6 digits'
    },
    numericality: true
  },
  groupName: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid groupname'
    },
  },
  activityName: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid ActivityName'
    },
  },
  venuLocation: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid Location'
    },
  },
  startDate: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid Start Date'
    },
  },
  activityTaskName:{
    presence: {
      allowEmpty: false,
      message: '^Please enter valid Task Name'
    },
  },
  dueDate: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid Due Date'
    },
  },
  rsvpDate: {
    presence: {
      allowEmpty: false,
      message: '^Please enter valid Rsvp Due Date'
    },
  },
  latitude: {
    presence: {
      allowEmpty: false,
      message: '^Please enter latitude'
    },
  },
  longitude: {
    presence: {
      allowEmpty: false,
      message: '^Please enter longitude'
    },
  }
}

export default validation;