// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class CalculadoratestTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void calculadoratest() {
    driver.get("http://127.0.0.1:5500/calculadora.html");
    driver.manage().window().setSize(new Dimension(1296, 696));
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .numb")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("9876543210"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(1)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("1"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("2"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(3)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("3"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(1)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("4"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("5"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(3)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("6"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(1)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("7"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(2)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("8"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(3)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("9"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .numb")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("0"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("4"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("6"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("4"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(3) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("4"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    driver.findElement(By.id("borrar")).click();
    driver.findElement(By.id("borrar")).click();
    driver.findElement(By.id("borrar")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("7"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(1)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("5,1"));
    driver.findElement(By.id("borrar")).click();
    driver.findElement(By.id("borrar")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("5"));
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(1)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("-5,97"));
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(1)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("5,97"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(3) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("-4"));
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("1,5"));
    driver.findElement(By.id("C")).click();
    driver.findElement(By.cssSelector("p:nth-child(4) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(5) > .operation")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(2)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(3)")).click();
    driver.findElement(By.cssSelector("p:nth-child(6) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(1)")).click();
    driver.findElement(By.cssSelector("p:nth-child(7) > .button:nth-child(4)")).click();
    assertThat(driver.findElement(By.id("area")).getText(), is("9,6"));
    driver.findElement(By.id("C")).click();
  }
}
