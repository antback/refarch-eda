(window.webpackJsonp=window.webpackJsonp||[]).push([[83,91],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),s=a.n(i),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),u=a.n(p),b=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:u()(b.pageHeader,(t={},t[b.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:b.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,l=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),T=a("dI71"),k=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(T.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),i=r===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,r);return Object(m.b)("li",{key:e,className:u()((t={},t[k.selectedItem]=i,t),k.listItem)},Object(m.b)(o.Link,{className:k.link,to:""+c},e))}));return Object(m.b)("div",{className:k.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:k.list},r))))))},t}(r.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,p=void 0===i?{}:i,u=t.relativePagePath,b=t.titleType,g=p.tabs,T=p.title,k=p.theme,N=p.description,S=p.keywords,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,v=y?n.pathname.replace(y,""):n.pathname,F=g?v.split("/").filter(Boolean).slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:g,homepage:!1,theme:k,pageTitle:T,pageDescription:N,pageKeywords:S,titleType:b},Object(m.b)(d,{title:r?Object(m.b)(r,null):T,label:"label",tabs:g}),g&&Object(m.b)(j,{slug:v,tabs:g,currentTab:F}),Object(m.b)(f.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:u})),Object(m.b)(O.a,{pageContext:t,location:n,slug:v,tabs:g,currentTab:F}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},mtQU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=l("AnchorLinks"),p=l("AnchorLink"),u={_frontmatter:o},b=s.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(i.b)(p,{mdxType:"AnchorLink"},"Scenario Prerequisites"),Object(i.b)(p,{mdxType:"AnchorLink"},"Setting up the Quarkus Application"),Object(i.b)(p,{mdxType:"AnchorLink"},"Creating your first Test Class"),Object(i.b)(p,{mdxType:"AnchorLink"},"More Robust Kafka Streams Testing"),Object(i.b)(p,{mdxType:"AnchorLink"},"Next Steps")),Object(i.b)("h2",null,"Overview"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In this lab scenario we’re going to use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://quarkus.io"}),"Quarkus")," - a subatomic and supersonic framework for Java for\nthe purposes of this lab."),Object(i.b)("li",{parentName:"ul"},"We will be testing using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://kafka.apache.org/documentation/streams/"}),"Apache Kafka Streams")," TestDriver to mimic a Topology, a Stream and Table."),Object(i.b)("li",{parentName:"ul"},"While using the TestDriver we will perform operations such as groupBy, join with another Stream or Kafka Table."),Object(i.b)("li",{parentName:"ul"},"Lastly and optionally (in Lab 2) we will use Kafka Streams to send events to a Kafka Topic on IBM Event Streams on Cloud Pak for Integration.")),Object(i.b)("h2",null,"Scenario Prerequisites"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Java")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For the purposes of this lab we suggest Java 8+")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Maven")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maven will be needed for bootstrapping our application from the command-line and running\nour application.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"An IDE of your choice")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ideally an IDE that supports Quarkus (such as Visual Studio Code)")),Object(i.b)("h2",null,"Setting up the Quarkus Application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We will bootstrap the Quarkus application with the following Maven command")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'mvn io.quarkus:quarkus-maven-plugin:1.10.5.Final:create \\\n    -DprojectGroupId=com.ibm \\\n    -DprojectArtifactId=quarkus-kstreams-lab-1 \\\n    -Dextensions="resteasy-jsonb,quarkus-kafka-streams"\n')),Object(i.b)("p",null,"You can replace the fields within {} as you like."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Since we will be using the Kafka Streams testing functionality we will need to edit the ",Object(i.b)("inlineCode",{parentName:"li"},"pom.xml")," to add\nthe dependency to our project. Open ",Object(i.b)("inlineCode",{parentName:"li"},"pom.xml")," and add the following.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.apache.kafka</groupId>\n    <artifactId>kafka-streams-test-utils</artifactId>\n    <version>2.5.0</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.hamcrest</groupId>\n    <artifactId>hamcrest</artifactId>\n    <version>2.2</version>\n</dependency>\n")),Object(i.b)("h2",null,"Creating your Test Class"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create the directory structure you will need for your Java file. ",Object(i.b)("em",{parentName:"p"},"(",Object(i.b)("strong",{parentName:"em"},"NOTE:")," If you are working in an IDE, this may be done for you when you create your package and classes.)")),Object(i.b)("p",{parentName:"li"}," ",Object(i.b)("inlineCode",{parentName:"p"},"mkdir -p src/test/java/com/ibm/garage/cpat"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create a new file named ",Object(i.b)("inlineCode",{parentName:"p"},"src/test/java/com/ibm/garage/cpat/TestLoadKtableFromTopic.java"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("inlineCode",{parentName:"p"},"TestLoadKtableFromTopic.java")," file and paste the following content."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.ibm.garage.cpat.lab;\n\nimport java.util.Properties;\n\nimport org.apache.kafka.common.serialization.Serdes;\nimport org.apache.kafka.common.serialization.StringSerializer;\nimport org.apache.kafka.streams.KeyValue;\nimport org.apache.kafka.streams.StreamsBuilder;\nimport org.apache.kafka.streams.StreamsConfig;\nimport org.apache.kafka.streams.TestInputTopic;\nimport org.apache.kafka.streams.TestOutputTopic;\nimport org.apache.kafka.streams.TopologyTestDriver;\nimport org.apache.kafka.streams.kstream.Consumed;\nimport org.apache.kafka.streams.kstream.KTable;\nimport org.apache.kafka.streams.kstream.Materialized;\nimport org.apache.kafka.streams.processor.StateStore;\nimport org.apache.kafka.streams.state.KeyValueBytesStoreSupplier;\nimport org.apache.kafka.streams.state.KeyValueIterator;\nimport org.apache.kafka.streams.state.KeyValueStore;\nimport org.apache.kafka.streams.state.Stores;\nimport org.apache.kafka.streams.state.ValueAndTimestamp;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.Assertions;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.Test;\n\nimport io.quarkus.test.junit.QuarkusTest;\n\n/**\n * This is a simple example of loading some reference data from stream into a Ktable for\n * lookup. It uses a persistent state store.\n */\n@QuarkusTest\npublic class TestLoadKtableFromTopic {\n    private static TopologyTestDriver testDriver;\n    private static String companySectorsTopic = "sector-types";\n    private static String storeName = "sector-types-store";\n\n    private static TestInputTopic<String, String> inTopic;\n    private static TestOutputTopic<String, Long> outTopic;\n    private static TestOutputTopic<String, String> errorTopic;\n\n    public static Properties getStreamsConfig() {\n        final Properties props = new Properties();\n        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "kstream-lab1");\n        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "dummmy:1234");\n        return props;\n    }\n\n    @BeforeAll\n    public static void buildTopology(){\n        final StreamsBuilder builder = new StreamsBuilder();\n        // Adding a state store is a simple matter of creating a StoreSupplier\n        // instance with one of the static factory methods on the Stores class.\n        // all persistent StateStore instances provide local storage using RocksDB\n        KeyValueBytesStoreSupplier storeSupplier = Stores.persistentKeyValueStore(storeName);\n\n        // A KTable is created from the companySectorsTopic, with key and value deserialized.\n        // With Materialized.as() causing the Table to force a state store materialization (storeSupplier).\n        KTable<String, String> sectorTypeTable = builder.table(companySectorsTopic,\n                Consumed.with(Serdes.String(), Serdes.String()),\n                Materialized.as(storeSupplier));\n\n        testDriver = new TopologyTestDriver(builder.build(), getStreamsConfig());\n        inTopic = testDriver.createInputTopic(companySectorsTopic, new StringSerializer(), new StringSerializer());\n\n    }\n\n    @AfterAll\n    public static void close(){\n        testDriver.close();\n    }\n\n    @Test\n    public void shouldHaveSixSectorTypes(){\n        inTopic.pipeInput("C01","Health Care");\n        inTopic.pipeInput("C02","Finance");\n        inTopic.pipeInput("C03","Consumer Services");\n        inTopic.pipeInput("C04","Transportation");\n        inTopic.pipeInput("C05","Capital Goods");\n        inTopic.pipeInput("C06","Public Utilities");\n\n        KeyValueStore<String,ValueAndTimestamp<String>> store = testDriver.getTimestampedKeyValueStore(storeName);\n        Assertions.assertNotNull(store);\n\n        ValueAndTimestamp<String> sector = store.get("C02");\n        Assertions.assertNotNull(sector);\n        Assertions.assertEquals("Finance", sector.value());\n        Assertions.assertEquals(6, store.approximateNumEntries());\n\n\n        // demonstrate how to get all the values from the table:\n        KeyValueIterator<String, ValueAndTimestamp<String>> sectors = store.all();\n        while (sectors.hasNext()) {\n            KeyValue<String,ValueAndTimestamp<String>> s = sectors.next();\n            System.out.println(s.key + ":" + s.value.value());\n        }\n        for ( StateStore s: testDriver.getAllStateStores().values()) {\n            System.out.println(s.name());\n        }\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"What the above code does is it uses TopologyTestDriver to mimic a Topology. A Topology is basically a graph of stream processors (nodes) and the edges between these nodes are the streams. In the first section we instantiate our ",Object(i.b)("inlineCode",{parentName:"p"},"TopologyTestDriver")," named ",Object(i.b)("inlineCode",{parentName:"p"},"testDriver"),", as well as the topic name and store name.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the application by running the following:"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw clean verify\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Depending upon versions of the packages brought in, you may see an initial test failure due to needing to update the ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties")," file with the following properties: ",Object(i.b)("em",{parentName:"p"},"(The values are insignifcant for the execution of our tests, but he existence of the property is required by the underlying Quarkus & Kafka Streams integration)")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),"quarkus.kafka-streams.application-id=my-kafka-streams\nquarkus.kafka-streams.topics=topic1\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You should see the tests pass with the following output:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running com.ibm.GreetingResourceTest\n2021-01-16 14:20:26,488 INFO  [io.quarkus] (main) Quarkus 1.10.5.Final on JVM started in 2.089s. Listening on: http://localhost:8081\n2021-01-16 14:20:26,490 INFO  [io.quarkus] (main) Profile test activated. \n2021-01-16 14:20:26,490 INFO  [io.quarkus] (main) Installed features: [cdi, kafka-streams, resteasy, resteasy-jsonb]\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 6.096 s - in com.ibm.GreetingResourceTest\n[INFO] Running com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\nC01:Health Care\nC02:Finance\nC03:Consumer Services\nC04:Transportation\nC05:Capital Goods\nC06:Public Utilities\nsector-types-store\n2021-01-16 14:20:28,253 WARN  [org.apa.kaf.str.sta.int.RocksDBStore] (main) Closing 1 open iterators for store sector-types-store\n2021-01-16 14:20:28,256 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.222 s - in com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\n2021-01-16 14:20:28,292 INFO  [io.quarkus] (main) Quarkus stopped in 0.028s\n[INFO] \n[INFO] Results:\n[INFO] \n[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"How this test topology creation flow works:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A StreamsBuilder object (builder) from the Kafka Streams DSL API is created."),Object(i.b)("li",{parentName:"ul"},"A KeyValueBytesStoreSupplier (storeSupplier) is configured with String variable (storeName)."),Object(i.b)("li",{parentName:"ul"},"A KTable is created reading from the topic (companySectorsTopic), deserialized and materialized as\nthe previously create (storeSupplier)."),Object(i.b)("li",{parentName:"ul"},"A TopologyTestDriver (testDriver) is built from the provided config properties and the KTable within the builder topology."),Object(i.b)("li",{parentName:"ul"},"Lastly test input topic (inTopic) is created from the testDriver topology."),Object(i.b)("li",{parentName:"ul"},"When ",Object(i.b)("inlineCode",{parentName:"li"},'inTopic.pipeInput("C01","Health Care");')," is invoked, it populates the topic, which then populates the KTable\nwhich ultimately persists in a KeyValue State Store."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You should see the tests pass. These are three simple tests. The first of which checks that the value fetched from\nthe Kafka Table is not null,the second makes sure that value retrieved from key ",Object(i.b)("inlineCode",{parentName:"p"},"C02")," is equal to ",Object(i.b)("inlineCode",{parentName:"p"},"Finance")," and lastly\nwe make sure that the our state store (which was piped by ways of the Kafka Topic) indeed has six key-value pairs."))),Object(i.b)("h2",null,"More Robust Kafka Streams Testing"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Now that we have tested some simple functionality by using the Kafka Streams API let’s check out some other\noperators that we can use.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Let’s create a new class for our Plain Old Java Object (POJO) named FinancialMessage: ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/java/com/ibm/garage/cpat/domain/FinancialMessage.java")))),Object(i.b)("p",null,"Now copy and paste the following content into the newly created file."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"package com.ibm.garage.cpat.domain;\n\npublic class FinancialMessage {\n\n    public String userId;\n    public String stockSymbol;\n    public String exchangeId;\n    public int quantity;\n    public double stockPrice;\n    public double totalCost;\n    public int institutionId;\n    public int countryId;\n    public boolean technicalValidation;\n\n    public FinancialMessage() {\n\n    }\n\n    public FinancialMessage(String userId, String stockSymbol, String exchangeId,\n                            int quantity, double stockPrice, double totalCost,\n                            int institutionId, int countryId, boolean technicalValidation) {\n\n        this.userId = userId;\n        this.stockSymbol = stockSymbol;\n        this.exchangeId = exchangeId;\n        this.quantity = quantity;\n        this.stockPrice = stockPrice;\n        this.totalCost = totalCost;\n        this.institutionId = institutionId;\n        this.countryId = countryId;\n        this.technicalValidation = technicalValidation;\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," We have not provided any accessors (getters) or mutators (setters) for simplicity. You can\nset those at your own discretion."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now that we have our new Java class, let’s create a new and separate Java Test class: ",Object(i.b)("inlineCode",{parentName:"li"},"src/test/java/com/ibm/garage/cpat/lab/TestFinancialMessage.java"),".")),Object(i.b)("p",null,"Copy the contents below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.ibm.garage.cpat.lab;\n\nimport java.util.Properties;\n\nimport org.apache.kafka.common.serialization.LongDeserializer;\nimport org.apache.kafka.common.serialization.Serde;\nimport org.apache.kafka.common.serialization.Serdes;\nimport org.apache.kafka.common.serialization.StringDeserializer;\nimport org.apache.kafka.common.serialization.StringSerializer;\nimport org.apache.kafka.streams.KeyValue;\nimport org.apache.kafka.streams.StreamsBuilder;\nimport org.apache.kafka.streams.StreamsConfig;\nimport org.apache.kafka.streams.TestInputTopic;\nimport org.apache.kafka.streams.TestOutputTopic;\nimport org.apache.kafka.streams.TopologyTestDriver;\nimport org.apache.kafka.streams.kstream.Consumed;\nimport org.apache.kafka.streams.kstream.KStream;\nimport org.apache.kafka.streams.kstream.Materialized;\nimport org.apache.kafka.streams.kstream.Produced;\nimport org.apache.kafka.streams.kstream.Windowed;\nimport org.apache.kafka.streams.kstream.WindowedSerdes;\nimport org.apache.kafka.streams.state.KeyValueBytesStoreSupplier;\nimport org.apache.kafka.streams.state.KeyValueStore;\nimport org.apache.kafka.streams.state.Stores;\nimport org.apache.kafka.streams.state.ValueAndTimestamp;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.Assertions;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.Test;\n\nimport io.quarkus.kafka.client.serialization.JsonbSerde;\nimport io.quarkus.kafka.client.serialization.JsonbSerializer;\nimport io.quarkus.test.junit.QuarkusTest;\n\nimport com.ibm.garage.cpat.domain.*;\n\n\n@QuarkusTest\npublic class TestFinancialMessage {\n\n    private static TopologyTestDriver testDriver;\n    private static String inTopicName = "transactions";\n    private static String outTopicName = "output";\n    private static String errorTopicName = "errors";\n    private static String storeName = "transactionCount";\n    private static TestInputTopic<String, FinancialMessage> inTopic;\n    private static TestOutputTopic<String, Long> outTopic;\n    private static TestOutputTopic<String, String> errorTopic;\n\n    private static final JsonbSerde<FinancialMessage> financialMessageSerde = new JsonbSerde<>(FinancialMessage.class);\n\n    public static Properties getStreamsConfig() {\n        final Properties props = new Properties();\n        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "kstream-lab2");\n        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "dummmy:2345");\n        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());\n        //props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, financialMessageSerde);\n        return props;\n    }\n\n    @BeforeAll\n    public static void buildTopology() {\n        final StreamsBuilder builder = new StreamsBuilder();\n        KeyValueBytesStoreSupplier storeSupplier = Stores.persistentKeyValueStore(storeName);\n\n        KStream<String, FinancialMessage> transactionStream =\n            builder.stream(\n                inTopicName,\n                Consumed.with(Serdes.String(), financialMessageSerde)\n            );\n\n        // First verify user id is present, if not route to error\n        KStream<String, FinancialMessage>[] branches =\n                transactionStream.branch(\n                    (key, value) -> value.userId == null,\n                    (key, value) -> true\n                );\n\n        // Handle error by sending to the errors topic.\n        branches[0].map(\n                 (key, value) -> { return KeyValue.pair(key, "No customer id provided");}\n                 )\n                .to(\n                    errorTopicName, Produced.with(Serdes.String(), Serdes.String())\n                );\n\n\n        // use groupBy to swap the key, then count by customer id,\n        branches[1].groupBy(\n                    (key, value) -> value.userId\n                )\n                .count(\n                    Materialized.as(storeSupplier)\n                )\n                .toStream()\n                .to(\n                    outTopicName,\n                    Produced.with(Serdes.String(), Serdes.Long())\n            );\n\n        testDriver = new TopologyTestDriver(builder.build(), getStreamsConfig());\n        inTopic = testDriver.createInputTopic(inTopicName, new StringSerializer(), new JsonbSerializer<FinancialMessage>());\n        //outTopic = testDriver.createOutputTopic(outTopicName,windowedSerde.deserializer(), new LongDeserializer());\n        outTopic = testDriver.createOutputTopic(outTopicName, new StringDeserializer(), new LongDeserializer());\n        errorTopic = testDriver.createOutputTopic(errorTopicName, new StringDeserializer(), new StringDeserializer());\n    }\n\n    @AfterAll\n    public static void close(){\n        testDriver.close();\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We have the setup for the TestTopology. Now, we can add a test that will insert two events into the topic. Add the following code to your test class:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    @Test\n    public void shouldHaveOneTransaction() {\n        // A FinancialMessage is mocked and set to the input topic. Within the Topology,\n        // this gets sent to the outTopic because a userId exists for the incoming message.\n\n        FinancialMessage mock = new FinancialMessage(\n            "1", "MET", "SWISS", 12, 1822.38, 21868.55, 94, 7, true\n        );\n        FinancialMessage mock2 = new FinancialMessage(\n            "2", "ASDF", "HELLO", 5, 1000.22, 4444.12, 38, 6, true\n        );\n\n        inTopic.pipeInput("T01", mock);\n        inTopic.pipeInput("T02", mock2);\n\n        Assertions.assertFalse(outTopic.isEmpty());\n        Assertions.assertEquals(1, outTopic.readKeyValue().value);\n\n        KeyValueStore<String,ValueAndTimestamp<FinancialMessage>> store = testDriver.getTimestampedKeyValueStore(storeName);\n        Assertions.assertEquals(1, store.approximateNumEntries());\n    }\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Test the application by running the following:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw clean verify\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You should see the following output:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running com.ibm.GreetingResourceTest\n2021-01-16 17:21:37,836 INFO  [io.quarkus] (main) Quarkus 1.10.5.Final on JVM started in 1.996s. Listening on: http://localhost:8081\n2021-01-16 17:21:37,837 INFO  [io.quarkus] (main) Profile test activated. \n2021-01-16 17:21:37,838 INFO  [io.quarkus] (main) Installed features: [cdi, kafka-streams, resteasy, resteasy-jsonb]\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 5.234 s - in com.ibm.GreetingResourceTest\n[INFO] Running com.ibm.garage.cpat.lab.TestFinancialMessage\n2021-01-16 17:21:39,460 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[ERROR] Tests run: 1, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.273 s <<< FAILURE! - in com.ibm.garage.cpat.lab.TestFinancialMessage\n[ERROR] shouldHaveOneTransaction  Time elapsed: 0.09 s  <<< FAILURE!\norg.opentest4j.AssertionFailedError: expected: <1> but was: <2>\n    at com.ibm.garage.cpat.lab.TestFinancialMessage.shouldHaveOneTransaction(TestFinancialMessage.java:132)\n\n[INFO] Running com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\nC01:Health Care\nC02:Finance\nC03:Consumer Services\nC04:Transportation\nC05:Capital Goods\nC06:Public Utilities\nsector-types-store\n2021-01-16 17:21:39,505 WARN  [org.apa.kaf.str.sta.int.RocksDBStore] (main) Closing 1 open iterators for store sector-types-store\n2021-01-16 17:21:39,507 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.039 s - in com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\n2021-01-16 17:21:39,541 INFO  [io.quarkus] (main) Quarkus stopped in 0.028s\n[INFO] \n[INFO] Results:\n[INFO] \n[ERROR] Failures: \n[ERROR]   TestFinancialMessage.shouldHaveOneTransaction:132 expected: <1> but was: <2>\n[INFO] \n[ERROR] Tests run: 3, Failures: 1, Errors: 0, Skipped: 0\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We see that our recently added test ",Object(i.b)("strong",{parentName:"p"},"failed"),". And this is expected due to the fact that we inserted two records but our test expects one. To remedy this test we must change\n",Object(i.b)("inlineCode",{parentName:"p"},"Assertions.assertEquals(1, store.approximateNumEntries());")," Set to 2 the comparisson.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Next let’s add another very simple test. Copy the following code to your Java test class:"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    @Test\n    public void testErrorTopicIsNotEmpty() {\n        FinancialMessage mock = new FinancialMessage(\n            null, "MET", "SWISS", 12, 1822.38, 21868.55, 94, 7, true\n        );\n\n        inTopic.pipeInput("T03", mock);\n\n        Assertions.assertFalse(errorTopic.isEmpty());\n    }\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Test the application by running the following:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw clean verify\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You should see the following output:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running com.ibm.GreetingResourceTest\n2021-01-16 17:29:34,258 INFO  [io.quarkus] (main) Quarkus 1.10.5.Final on JVM started in 2.470s. Listening on: http://localhost:8081\n2021-01-16 17:29:34,260 INFO  [io.quarkus] (main) Profile test activated. \n2021-01-16 17:29:34,260 INFO  [io.quarkus] (main) Installed features: [cdi, kafka-streams, resteasy, resteasy-jsonb]\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 5.694 s - in com.ibm.GreetingResourceTest\n[INFO] Running com.ibm.garage.cpat.lab.TestFinancialMessage\n2021-01-16 17:29:36,001 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.309 s - in com.ibm.garage.cpat.lab.TestFinancialMessage\n[INFO] Running com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\nC01:Health Care\nC02:Finance\nC03:Consumer Services\nC04:Transportation\nC05:Capital Goods\nC06:Public Utilities\nsector-types-store\n2021-01-16 17:29:36,057 WARN  [org.apa.kaf.str.sta.int.RocksDBStore] (main) Closing 1 open iterators for store sector-types-store\n2021-01-16 17:29:36,059 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.049 s - in com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\n2021-01-16 17:29:36,099 INFO  [io.quarkus] (main) Quarkus stopped in 0.031s\n[INFO] \n[INFO] Results:\n[INFO] \n[INFO] Tests run: 4, Failures: 0, Errors: 0, Skipped: 0\n")),Object(i.b)("p",null,"As you can see here, our message payload is created with ",Object(i.b)("inlineCode",{parentName:"p"},"null")," for the userId field which means this message will branch out to the ",Object(i.b)("inlineCode",{parentName:"p"},"errorTopic"),". The purpose of the test\nis to check if our ",Object(i.b)("inlineCode",{parentName:"p"},"errorTopic")," is empty, which should not be. Since our ",Object(i.b)("inlineCode",{parentName:"p"},"errorTopic.isEmpty()")," resolves to false and our assertion\nis asserting that it is false as well, thus the test passes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now that we have two simple tests, let’s update our first branch to allow us to filter the stream on a condition\nthat we want. Let’s edit our ",Object(i.b)("inlineCode",{parentName:"li"},"branches[1]")," statement so that it will filter out and retain only the records where\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"totalCost")," is greater than 5000.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"branches[1].filter(\n            (key, value) -> (value.totalCost > 5000)\n        )\n        .groupBy(\n            (key, value) -> value.userId\n        )\n        .count(\n            Materialized.as(storeSupplier)\n        )\n        .toStream()\n        .to(\n            outTopicName,\n            Produced.with(Serdes.String(), Serdes.Long())\n        );\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Test the application by running the following:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw clean verify\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You should see the following output:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running com.ibm.GreetingResourceTest\n2021-01-16 17:40:50,765 INFO  [io.quarkus] (main) Quarkus 1.10.5.Final on JVM started in 2.102s. Listening on: http://localhost:8081\n2021-01-16 17:40:50,766 INFO  [io.quarkus] (main) Profile test activated. \n2021-01-16 17:40:50,766 INFO  [io.quarkus] (main) Installed features: [cdi, kafka-streams, resteasy, resteasy-jsonb]\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 5.474 s - in com.ibm.GreetingResourceTest\n[INFO] Running com.ibm.garage.cpat.lab.TestFinancialMessage\n2021-01-16 17:40:52,393 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[ERROR] Tests run: 2, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.307 s <<< FAILURE! - in com.ibm.garage.cpat.lab.TestFinancialMessage\n[ERROR] shouldHaveOneTransaction  Time elapsed: 0.022 s  <<< FAILURE!\norg.opentest4j.AssertionFailedError: expected: <2> but was: <1>\n    at com.ibm.garage.cpat.lab.TestFinancialMessage.shouldHaveOneTransaction(TestFinancialMessage.java:135)\n\n[INFO] Running com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\nC01:Health Care\nC02:Finance\nC03:Consumer Services\nC04:Transportation\nC05:Capital Goods\nC06:Public Utilities\nsector-types-store\n2021-01-16 17:40:52,445 WARN  [org.apa.kaf.str.sta.int.RocksDBStore] (main) Closing 1 open iterators for store sector-types-store\n2021-01-16 17:40:52,447 INFO  [org.apa.kaf.str.pro.int.StateDirectory] (main) stream-thread [main] Deleting state directory 0_0 for task 0_0 as user calling cleanup.\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.046 s - in com.ibm.garage.cpat.lab.TestLoadKtableFromTopic\n2021-01-16 17:40:52,487 INFO  [io.quarkus] (main) Quarkus stopped in 0.031s\n[INFO] \n[INFO] Results:\n[INFO] \n[ERROR] Failures: \n[ERROR]   TestFinancialMessage.shouldHaveOneTransaction:135 expected: <2> but was: <1>\n[INFO] \n[ERROR] Tests run: 4, Failures: 1, Errors: 0, Skipped: 0\n")),Object(i.b)("p",null,"We see that our first tests is now ",Object(i.b)("strong",{parentName:"p"},"failing again"),". And this is expected because we are changing the logic of how ",Object(i.b)("inlineCode",{parentName:"p"},"branches[1]")," works to filter out those transactions less than ",Object(i.b)("inlineCode",{parentName:"p"},"5000"),". This makes the second record we send in to get filtered out. In order to fix our test again, we either decrease the assertion for the expected entries in our store back to 1 or we modify the amount of the second transaction to be greater than ",Object(i.b)("inlineCode",{parentName:"p"},"5000"),". Once we do that, if we test the application again, we should get all tests passing."),Object(i.b)("h2",null,"Next Steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now that you have finished this initial part of Lab 1 you can optionally proceed to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/use-cases/kafka-streams/lab-2/"}),"Lab 2"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-streams-lab-1-index-mdx-9475940c357b56e05fd2.js.map