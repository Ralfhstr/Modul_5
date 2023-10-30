import { ScrollView, Text, Image, Divider } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <ScrollView>
              <Header title={"News"} withBack={true} />
              <Image source={{uri: params.image}} w="$full" h={200} mb={"$2"}/>
              <Text m={"$3"}>{params.date}</Text>
              <Text ml={"$3"} mr={"$3"} mb={"$3"} textAlign="left" bold fontSize={"$xl"}>{params.title}</Text>
              <Divider my="2" _light={{ bg: "muted.800" }} _dark={{ bg: "muted.50" }} />
              <Text m={"$3"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.\n\nSuspendisse tincidunt eleifend volutpat. Phasellus vehicula sapien eu aliquam dignissim. Duis diam lorem, porta id nisi a, interdum rutrum quam. Suspendisse tincidunt euismod nunc. Etiam interdum, sem tincidunt sodales dignissim, orci ligula hendrerit dolor, ac suscipit neque eros sit amet magna. Sed gravida porttitor justo in venenatis. Maecenas dolor odio, semper eu velit pharetra, euismod placerat lectus. Curabitur nec aliquam mi. Aliquam suscipit iaculis vestibulum. Integer nibh ante, dignissim sed convallis eget, elementum ut nunc. Fusce non pharetra enim. Etiam ut justo est. Morbi commodo bibendum lorem a condimentum. Nulla ut magna tempor neque fringilla auctor. Ut aliquam ipsum urna, sodales ultricies ipsum pulvinar ac.\n\nNullam ultrices egestas dapibus. Vivamus sodales, nisl vel lobortis vestibulum, elit libero venenatis mauris, ut efficitur augue turpis ac lorem. Duis eu hendrerit ligula. Mauris auctor, purus ut ornare condimentum, ligula nisi egestas erat, eu fermentum libero massa tincidunt turpis. Suspendisse porta luctus elit eu pellentesque. Vivamus feugiat pellentesque hendrerit. Duis eu vulputate urna, quis bibendum nulla.\n\nPhasellus et faucibus elit, mollis accumsan arcu. Fusce scelerisque orci purus, vel scelerisque nisl viverra vitae. Nulla non lectus in lacus mollis consequat. Aenean consequat luctus tristique. Nunc imperdiet condimentum cursus. Praesent vel fermentum est, id pulvinar est. Nunc dolor velit, commodo non vehicula at, tincidunt lobortis mauris. Curabitur laoreet ipsum ut erat interdum ornare.</Text>
            </ScrollView>
        </>
    );
};

export default NewsDetail;
