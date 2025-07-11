package com.employee.employee_jpa.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String branch;
    private double salary;
    public Employee() {
        super();
    }
    public Employee(long id, String name, String branch, double salary) {
        super();
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.salary = salary;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBranch() {
        return branch;
    }
    public void setBranch(String branch) {
        this.branch = branch;
    }
    public double getSalary() {
        return salary;
    }
    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public String toString(){
        return "Employee [id = "+ id +", name = "+ name +", branch = "+ branch +", salary = "+ salary +"]";
    }

}
