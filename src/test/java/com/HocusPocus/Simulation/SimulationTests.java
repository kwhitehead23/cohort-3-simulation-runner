package com.HocusPocus.Simulation;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

@SpringBootTest
class SimulationTests {

	@Test
	public void Rulesetexist(){

	given()
    .when()
    .get("  http://localhost:3000/users")
    .then()
    .assertThat()
			.body("find { it.id == 1 }.name", equalTo("Daniel"));
	}

@Test
	public  void deletingRuleset(){
	given()
			.when()

			.delete("http://localhost:3000/users/{userId}", 6)
			.then()
			.assertThat()
			.statusCode(200);

	}


	@Test
	public void createUser (){
		String newUserName = "Dom"; // Specify the name for the new user

		// Define the request to create a new user
		given()
				.body("{\"name\":\"" + newUserName + "\"}")
				.header("Content-Type", "application/json")
				.when()
				.post("http://localhost:3000/users") // POST to the /users endpoint
				.then()
				.assertThat()
				.statusCode(201);
	}


	@Test
	public void updateUSer(){
		String updatedUserName = "Daniel"; // Specify the new name for the user you want to update

		// Define the request to update a user using PUT
		given()
				.body("{\"name\":\"" + updatedUserName + "\"}")
				.header("Content-Type", "application/json")
				.when()
				.put("http://localhost:3000/users/{userId}", 1) // Update the user with ID 1
				.then()
				.assertThat()
				.statusCode(200);


	}
}
