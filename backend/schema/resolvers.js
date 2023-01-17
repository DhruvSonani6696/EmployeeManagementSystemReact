const Employees = require('../models/empSchema')
const resolvers = {
    Query: {
        getEmployees: (parent, args) => {
            if (args.empType == 'All') {
                return Employees.find({}).then(res => { return res }).catch(err=>{console.log(err)});
            } else {
                return Employees.find({ empType: args.empType }).then(res => { return res }).catch(err=>{console.log(err)});
            }
        },
        getEmployee: (parent, args) => {
            return Employees.findById(args.id).then(res => { return res });
        }
    },
    Mutation: {
        addEmployee: (parent, args) => {
            let Employee = new Employees({
                firstName: args.firstName,
                lastName: args.lastName,
                age: args.age,
                dateOfJoining: args.dateOfJoining,
                title: args.title,
                department: args.department,
                empType: args.empType,
                currentStatus: "1",

            })
            return Employee.save()
        },
        updateEmployee: (parent, args) => {
            if (args.id) {
                return Employees.findOneAndUpdate({ _id: args.id }, {
                    $set: {
                        title: args.title, department: args.department, currentStatus: args.currentStatus
                    }
                }, { new: true }).then(res => { return res }).
                    catch(err => { throw err })
            } else {
                throw "Please Provide Id"
            }
        },
        deleteEmployee: (parent, args) => {
            if (args.id) {
                return Employees.deleteOne({ _id: args.id }).then(res => { return true }).catch(err => { throw err })
            } else {
                throw "Please Provide Id"
            }
        }
    }
};

module.exports = { resolvers }