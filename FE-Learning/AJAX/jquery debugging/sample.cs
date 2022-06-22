class MyClass
{
public static void Main(string[] obj)
{
List<Employee> listEmployees = new List<Employee>()
        {
        new ParttimeEmplyee(1,"Sathya", 1000),
        new FulltimeEmplyee(1, "Vignesh", 1000),
        new FulltimeEmplyee(1, "Naveen", 3000)
        };

        foreach (var employees in listEmployees)
        {
        employees.PrintSalary();
        employees.CalculateSalary();
        employees.PrintBonus();
        }
        }



        public abstract class Employee
        {
        public Employee();

        public Employee(int EmployeeId, string EmployeeName, decimal Salary)
        {
        this.EmployeeId = EmployeeId;
        this.EmployeeName = EmployeeName;
        this.Salary = Salary;
        }
        private int EmployeeId { get; set; }
        private string EmployeeName { get; set; }
        private decimal Salary { get; set; }
        protected decimal _CTC;
        private const decimal _bonus = 0.5m;



        public void PrintSalary()
        {
        Console.WriteLine($"Employee Name {this.EmployeeName} and Salary {this.Salary}");
        }



        public void CalculateSalary()
        {
        _CTC = this.Salary * 12;
        }



        public virtual void PrintBonus()
        {
        Console.WriteLine($"CTC : {_CTC * _bonus}");
        }
        }



        public class ParttimeEmplyee : Employee
        {
        public ParttimeEmplyee(int EmployeeId, string EmployeeName, decimal Salary) : base(EmployeeId, EmployeeName,
        Salary)
        {
        }



        private const decimal _bonus = 0.1m;



        public override void PrintBonus()
        {
        Console.WriteLine($"CTC : {_CTC * _bonus}");
        }
        }



        public class FulltimeEmplyee : Employee
        {
        public FulltimeEmplyee(int EmployeeId, string EmployeeName, decimal Salary) : base(EmployeeId, EmployeeName,
        Salary)
        {



        }
        }



        public class ContractEmplyee : Employee
        {
        public ContractEmplyee(int EmployeeId, string EmployeeName, decimal Salary) : base(EmployeeId, EmployeeName,
        Salary)
        {



        }



        private const decimal _bonus = 0.1m;
        private const decimal _duration = 6m;




        public override void PrintBonus()
        {
        Console.WriteLine($"CTC : {_CTC * _bonus * (_duration / 12.0m)}");
        }
        }
        }